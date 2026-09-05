"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mesh mesh-contact" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="page-grid">
          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-cream/70">
              Let&apos;s talk
            </p>
            <h2 className="mt-3 break-words font-serif text-4xl font-bold leading-[1.05] text-cream sm:text-5xl">
              Contact
            </h2>

            <p className="mt-8 max-w-sm font-sans text-base font-medium leading-relaxed text-cream/85">
              Have a role, a project, or an idea worth building? Drop a note
              or reach me directly &mdash; I&apos;m usually quick to reply.
            </p>

            <ul className="mt-8 flex flex-col gap-3 border-t border-cream/25 pt-8 font-sans text-base font-semibold text-cream">
              <li>
                <a href="tel:+919335120023" className="hover:opacity-70">
                  +91 93351 20023
                </a>
              </li>
              <li>
                <a href="mailto:shreyanshpaliwal18@gmail.com" className="hover:opacity-70">
                  shreyanshpaliwal18@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/shreyanshpaliwal135"
                  className="hover:opacity-70"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shreyp135"
                  className="hover:opacity-70"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="grid-line !bg-cream/25" aria-hidden />

          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <form className="flex max-w-xl flex-col gap-6" onSubmit={handleSubmit}>
              <label className="flex flex-col gap-2 font-sans text-sm font-bold text-cream">
                Name
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="field on-dark px-4 py-3 font-sans text-base font-medium text-cream placeholder:text-cream/50"
                />
              </label>

              <label className="flex flex-col gap-2 font-sans text-sm font-bold text-cream">
                Email address
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="field on-dark px-4 py-3 font-sans text-base font-medium text-cream placeholder:text-cream/50"
                />
              </label>

              <label className="flex flex-col gap-2 font-sans text-sm font-bold text-cream">
                Message
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                  rows={5}
                  className="field on-dark resize-y px-4 py-3 font-sans text-base font-medium text-cream placeholder:text-cream/50"
                />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="arrow-btn on-dark self-start disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  <span aria-hidden className="arrow-glyph">→</span>
                </button>

                {status === "sent" && (
                  <p className="font-sans text-sm font-semibold text-cream">
                    Thanks — your message is on its way. I&apos;ll reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="font-sans text-sm font-semibold text-red-300">
                    {errorMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Solid backdrop (rather than the transparent mesh) so the footer
            keeps reliable contrast no matter how light the gradient gets
            by the bottom of the page — text stays cream throughout instead
            of switching color partway down. */}
        {/* <div className="border-t border-cream/15 bg-ink px-6 py-8 sm:px-10">
          <div className="flex flex-col gap-4 font-sans text-sm font-semibold text-cream/80 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Shreyansh Paliwal</p>
            <ul className="flex flex-wrap gap-6 text-cream">
              <li><a href="#top" className="hover:opacity-70">Top</a></li>
              <li><a href="#experience" className="hover:opacity-70">Experience</a></li>
              <li><a href="#work" className="hover:opacity-70">Work</a></li>
            </ul>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
