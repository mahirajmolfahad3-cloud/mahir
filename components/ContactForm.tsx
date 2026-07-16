"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "./icons";

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          projectType: data.get("projectType"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }


  if (status === "sent") {
    return (
      <div className="section-card flex h-full flex-col items-center justify-center rounded-[24px] p-10 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckIcon className="h-5 w-5" />
        </span>
        <h3 className="mt-4 font-display text-lg font-normal text-ink">
          Message sent, thank you
        </h3>
        <p className="mt-1.5 max-w-xs text-[14px] text-ink-muted">
          I&rsquo;ll read this properly and get back to you within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="section-card relative rounded-[24px] p-6 sm:p-8"
    >
      {status === "error" && (
        <div className="absolute inset-x-6 top-4 z-10 rounded-xl bg-red-500/10 p-3 text-[13px] font-medium text-red-600">
          Something went wrong. Please try again.
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

        <Field label="Name" name="name" type="text" placeholder="Jane Founder" required />
        <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
      </div>

      <div className="mt-5">
        <Field
          label="Project type"
          name="projectType"
          type="text"
          placeholder="SaaS MVP, dashboard, landing page…"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-[0.24em] text-ink"
        >
          Tell me a little about it
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building, and what's the timeline?"
          className="w-full resize-none rounded-2xl border border-border bg-paper px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/25"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14px] font-medium text-paper transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-ink disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-[0.24em] text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-paper px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/25"
      />
    </div>
  );
}
