const PROJECTS = [
  {
    name: "Alethea",
    tagline: "Agentic log-intelligence pipeline with an integrated RAG debugging chatbot",
    stack: "React, TypeScript, Next.js, Llama 3, Node.js, Docker, MongoDB, Redis, OAuth",
    points: [
      "Developed an agentic AI pipeline that parses raw logs, detects anomalies, reconstructs failure context and generates LLM-based incident narratives.",
      "Built a real-time PR analysis engine using GitHub REST APIs and webhooks to ingest pull requests, evaluate code diffs and surface high-risk changes across repositories.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/shreyp135/Alethea/" },
      { label: "Website", href: "https://alethea-dev.vercel.app/" },
    ],
  },
  {
    name: "BehaveGuard",
    tagline: "Keystroke and mouse-dynamics behavioral authentication system",
    stack: "Python, Machine Learning, PostgreSQL, Redis, Scikit-learn, Feature Engineering",
    points: [
      "Architected a behavioral authentication system, designing the feature extraction pipeline and deploying it for real-time verification against enrolled profiles.",
      "Curated a longitudinal multi-user dataset alongside the CMU benchmark; the best-performing model reached 95.6% balanced accuracy and 2.1% EER.",
      "Containerized and deployed on Google Cloud Run with GitHub Actions CI/CD, using PostgreSQL for enrollment/verification data and Redis for session management and rate limiting.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/mkgstf/behaveguard" },
      { label: "Website", href: "https://behaveguard-web.vercel.app/" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative section-frame overflow-hidden">
      <div className="mesh mesh-projects" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="page-grid">
          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-ink/70">
              Selected work
            </p>
            <h2 className="mt-3 break-words font-serif text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              Projects
            </h2>
          </div>
          <div className="grid-line" aria-hidden />

          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <div className="flex flex-col">
              {PROJECTS.map((p, i) => (
                <div
                  key={p.name}
                  className={`py-10 first:pt-0 last:pb-0 ${i !== 0 ? "border-t border-line" : ""}`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
                      {p.name}
                    </h3>
                    <div className="flex gap-3">
                      {p.links.map((l) => (
                        <a key={l.label} href={l.href} className="arrow-btn text-sm">
                          {l.label} <span aria-hidden className="arrow-glyph">→</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="mt-3 max-w-2xl font-sans text-base font-semibold text-ink/85">
                    {p.tagline}
                  </p>
                  <p className="mt-2 font-sans text-xs font-bold uppercase tracking-wide text-ink/60">
                    {p.stack}
                  </p>

                  <ul className="mt-6 flex flex-col gap-3 font-sans text-[15px] font-medium leading-relaxed text-ink/90">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-ink"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
