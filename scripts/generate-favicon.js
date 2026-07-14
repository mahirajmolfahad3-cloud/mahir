const fs = require('fs');
const path = require('path');

function writeUInt16LE(buf, offset, value) {
    buf.writeUInt16LE(value, offset);
}

function writeUInt32LE(buf, offset, value) {
    buf.writeUInt32LE(value, offset);
}

function makeBmp(width, height, bg, border, accent, mark) {
    const rowSize = Math.floor((32 * width + 31) / 32) * 4;
    const pixelDataSize = rowSize * height;
    const bmp = Buffer.alloc(40 + 14 + pixelDataSize);

    bmp.write('BM', 0);
    writeUInt32LE(bmp, 2, 14 + 40 + pixelDataSize);
    writeUInt32LE(bmp, 10, 14 + 40);
    writeUInt32LE(bmp, 14, 40);
    writeUInt32LE(bmp, 18, width);
    writeUInt32LE(bmp, 22, height);
    writeUInt16LE(bmp, 26, 1);
    writeUInt16LE(bmp, 28, 32);
    writeUInt32LE(bmp, 30, 0);
    writeUInt32LE(bmp, 34, pixelDataSize);
    writeUInt32LE(bmp, 38, 2835);
    writeUInt32LE(bmp, 42, 2835);
    writeUInt32LE(bmp, 46, 0);
    writeUInt32LE(bmp, 50, 0);

    let offset = 54;
    for (let y = height - 1; y >= 0; y--) {
        for (let x = 0; x < width; x++) {
            let color = bg;
            const inset = 1;
            const isBorder = x < inset || x >= width - inset || y < inset || y >= height - inset;
            if (isBorder) color = border;

            const midX = width / 2;
            const midY = height / 2;
            const dx = x - midX + 0.5;
            const dy = y - midY + 0.5;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const ring = dist > 3.2 && dist < 5.0;
            const slash = (x < midX && y > midY) || (x > midX && y < midY);
            const markPx = (x >= 3 && x <= width - 3 && y >= 3 && y <= height - 3 && ((x <= 4 && y >= 4) || (x >= width - 5 && y >= 4) || (x >= 5 && x <= width - 5 && y <= 7)));
            if (ring) color = accent;
            if (markPx) color = mark;
            if (slash && !isBorder && y < height - 2) color = mark;

            bmp[offset] = color[2];
            bmp[offset + 1] = color[1];
            bmp[offset + 2] = color[0];
            bmp[offset + 3] = 0;
            offset += 4;
        }
        while (offset % 4 !== 0) {
            bmp[offset++] = 0;
        }
    }
    return bmp;
}

function buildIco() {
    const size = 16;
    const bmp = makeBmp(size, size, [255, 253, 248], [43, 38, 24], [127, 163, 119], [127, 163, 119]);

    const ico = Buffer.alloc(6 + 16 + bmp.length);
    ico.writeUInt16LE(0, 0);
    ico.writeUInt16LE(1, 2);
    ico.writeUInt16LE(1, 4);

    const entry = Buffer.alloc(16);
    entry[0] = size;
    entry[1] = size;
    entry[2] = 0;
    entry[3] = 0;
    entry[4] = 0;
    entry[5] = 0;
    entry[6] = 0;
    entry[7] = 0;
    entry[8] = 0;
    entry[9] = 0;
    entry[10] = 0;
    entry[11] = 0;
    entry[12] = 0;
    entry[13] = 0;
    entry[14] = 0;
    entry[15] = 0;
    writeUInt16LE(entry, 12, 1);
    writeUInt16LE(entry, 14, 32);
    writeUInt32LE(entry, 8, 40 + bmp.length);
    writeUInt32LE(entry, 12, 22);

    entry.copy(ico, 6);
    bmp.copy(ico, 22);
    return ico;
}

const outPath = path.join(__dirname, '..', 'public', 'favicon.ico');
fs.writeFileSync(outPath, buildIco());
console.log('Created', path.resolve(outPath));
