"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES, validateContact, type ContactErrors, type ContactField } from "@/data/contact";
import Button from "@/components/Button";

type Status = "idle" | "submitting" | "success" | "error";

const labelCls = "block mb-2 text-[11.5px] uppercase tracking-wider font-jetbrain font-semibold text-gray-00";

const inputCls = (error?: string) => `w-full bg-black-01 border rounded-none px-4 py-3 text-sm text-white-01 placeholder:text-gray-00 focus:outline-none transition-colors ${error ? "border-red-500/70 focus:border-red-500" : "border-white/14 focus:border-white/40"}`;

/** id / name / aria wiring shared by every control */
const a11y = (name: ContactField, error?: string) => ({
  id: `contact-${name}`,
  name,
  "aria-invalid": !!error,
  "aria-describedby": error ? `contact-${name}-error` : undefined,
});

function Field({ name, label, required, error, children }: { name: ContactField; label: string; required?: boolean; error?: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <label htmlFor={`contact-${name}`} className={labelCls}>
        {label}{" "}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p id={`contact-${name}-error`} role="alert" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden pt-1.5 text-xs text-red-400">
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [serverError, setServerError] = useState("");
  const submitting = status === "submitting";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget; // capture before any await
    const payload = Object.fromEntries(new FormData(form));

    const { errors: found } = validateContact(payload);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setErrors(found);
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (json.fieldErrors) setErrors(json.fieldErrors);
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="border border-white/14 bg-[#141414] p-6 sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div key="success" role="status" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="px-2.5 py-12 text-left">
            <span className="mb-5 inline-flex h-16 w-16 items-center justify-center border border-white/14 bg-[#141414]">
              <svg viewBox="0 0 24 24" width={30} height={30} fill="none" stroke="#F5F5F2" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <motion.polyline points="20 6 9 17 4 12" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }} />
              </svg>
            </span>
            <h2 className="mb-2.5 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic1 italic">Message sent.</h2>
            <p className="text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-155 font-light tracking-wide text-left mb-5">Thanks for reaching out — someone from our team will get back to you within one business day.</p>
            <button
              type="button"
              className="group inline-flex items-center justify-center w-full sm:w-fit gap-2 px-5 py-2.75 border-[1.5px] font-jetbrain uppercase tracking-[.04em] font-semibold text-[12.5px] whitespace-nowrap shrink-0 overflow-hidden transition-all duration-300 ease-out active:scale-[0.96] active:duration-150 bg-white border-white text-black-01 hover:bg-[#141414] hover:text-gray-03 cursor-pointer"
              onClick={() => {
                setErrors({});
                setStatus("idle");
              }}
            >
              <span className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5">Submite Another</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-45">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
            <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Send us a message</h2>
            <p className="mt-2 mb-7 text-sm text-gray-00">Fields marked with * are required.</p>

            <form
              onSubmit={handleSubmit}
              onChange={(e) => {
                const target = e.target;
                if (!(target instanceof HTMLElement)) return;

                const field = target.getAttribute("name") as ContactField | null;
                if (field && errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
              }}
              noValidate
              className="relative flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
                <Field name="name" label="Full name" required error={errors.name}>
                  <input type="text" placeholder="Md. Rahman" autoComplete="name" {...a11y("name", errors.name)} className={inputCls(errors.name)} />
                </Field>
                <Field name="email" label="Email" required error={errors.email}>
                  <input type="email" placeholder="rahman@company.com" autoComplete="email" {...a11y("email", errors.email)} className={inputCls(errors.email)} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
                <Field name="company" label="Company" error={errors.company}>
                  <input type="text" placeholder="Company name (optional)" autoComplete="organization" {...a11y("company", errors.company)} className={inputCls(errors.company)} />
                </Field>
                <Field name="service" label="What do you need?" required error={errors.service}>
                  <div className="relative">
                    <select defaultValue="" {...a11y("service", errors.service)} className={`${inputCls(errors.service)} appearance-none pr-10 [color-scheme:dark]`}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="#6E6E6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </Field>
              </div>

              <Field name="message" label="Project details" required error={errors.message}>
                <textarea rows={5} placeholder="Tell us about your project, timeline, and budget range." {...a11y("message", errors.message)} className={`${inputCls(errors.message)} resize-y`} />
              </Field>

              <AnimatePresence>
                {status === "error" && serverError && (
                  <motion.div role="alert" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {serverError}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap border-[1.5px] border-white bg-white px-6 py-3 font-jetbrain text-[12.5px] font-semibold uppercase tracking-[.04em] text-black-01 transition-all duration-300 ease-out hover:bg-[#141414] hover:text-white active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 disabled:active:scale-100 sm:w-auto sm:self-start"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{submitting ? "Sending…" : "Send Message"}</span>
                {submitting ? (
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" className="animate-spin">
                    <path d="M21 12a9 9 0 1 1-6.2-8.56" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform duration-300 group-hover:rotate-45">
                    <line x1={22} y1={2} x2={11} y2={13} />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
              </button>

              <p className="flex items-start gap-1.5 text-[12.5px] text-gray-00">
                <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="#6E6E6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <rect x={3} y={11} width={18} height={10} rx={0} />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Your details are used only to respond to this inquiry — never shared or sold.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
