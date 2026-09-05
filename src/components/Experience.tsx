const ROLES = [
  {
    company: "Procurpal",
    role: "Software Engineer Intern — Full Stack",
    period: "Dec 2024 – Mar 2025",
    location: "Bangalore, Remote",
    points: [
      "Designed and led backend integration for QSign, an e-signing document feature, using TypeScript, AWS Lambda, API Gateway, cron jobs and DynamoDB — automating workflows and cutting sync delays by 50%.",
      "Engineered a real-time eAuction module with React, WebSockets, Tailwind CSS and ShadCN UI, shipping 20+ production-ready screens supporting concurrent sessions.",
      "Optimized AWS Lambda microservices and the Docker deployment pipeline, cutting deploy time from 10m to 3.6m and artifact storage 5x.",
    ],
  },
  {
    company: "MyAiTree",
    role: "Software Engineer Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Delhi, Remote",
    points: [
      "Built a client-side image caching layer for asset delivery, dropping page load latency from 4000ms to under 500ms and improving PDF parsing and rendering.",
      "Integrated a Python-based computer vision AI backend with the frontend via RESTful APIs, enabling real-time inference results across the UI.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative section-frame overflow-hidden">
      <div className="mesh mesh-experience" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="page-grid">
          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-ink/70">
              Where I&apos;ve worked
            </p>
            <h2 className="mt-3 break-words font-serif text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              Experience
            </h2>
          </div>
          <div className="grid-line" aria-hidden />

          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <div className="flex flex-col">
              {ROLES.map((r, i) => (
                <div
                  key={r.company}
                  className={`py-10 first:pt-0 last:pb-0 ${i !== 0 ? "border-t border-line" : ""}`}
                >
                  <h3 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
                    {r.company}
                  </h3>
                  <p className="mt-2 font-sans text-base font-semibold text-ink/85">
                    {r.role}
                  </p>
                  <p className="mt-1 font-sans text-sm font-medium text-ink/65">
                    {r.period} &middot; {r.location}
                  </p>

                  <ul className="mt-6 flex flex-col gap-3 font-sans text-[15px] font-medium leading-relaxed text-ink/90">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-ink"
                        />
                        <span>{p}</span>
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
