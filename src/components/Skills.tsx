const SKILL_GROUPS = [
  { label: "Languages", items: ["C", "C++", "JavaScript", "TypeScript", "Python"] },
  {
    label: "Frameworks & libraries",
    items: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Socket.IO"],
  },
  {
    label: "Tools & infra",
    items: ["MongoDB", "Redis", "Docker", "Git", "AWS (Lambda, DynamoDB, S3, EC2)", "Google Cloud Run", "GitHub Actions"],
  },
  {
    label: "Certifications",
    items: ["AWS Cloud Technical Essentials", "Microsoft AI Fundamentals (AI-900)", "Postman API Fundamentals"],
  },
];

const ACHIEVEMENTS = [
  "Contributed 11+ patches to the Git open-source codebase via the kernel.org mailing list review process, merged into v2.54.0.",
  "Ranked Top 10 among 5,000+ participants in Augtoberfest (Code4GovTech); secured a merged PR in OpenNyAI.",
  "Secured 3rd place at Hacknovate Sustainable Development Hackathon; shortlisted among Top 50 teams at Smart India Hackathon 2025.",
  "Served as Web Dev Head at IOSD and Core Developer at TEDxMAIT; co-organized HackMAIT 5.0 and led full-stack workshops.",
];

export default function Skills() {
  return (
    <section id="skills" className="relative section-frame overflow-hidden text-cream">
      <div className="mesh mesh-skills" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="page-grid">
          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-cream/60">
              What I work with
            </p>
            <h2 className="mt-3 break-words font-serif text-4xl font-bold leading-[1.05] text-cream sm:text-5xl">
              Skills
            </h2>
          </div>
          <div className="grid-line !bg-cream/20" aria-hidden />

          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <dl className="flex flex-col gap-8">
              {SKILL_GROUPS.map((g, i) => (
                <div key={g.label} className={`${i !== 0 ? "border-t border-cream/20 pt-8" : ""}`}>
                  <dt className="font-sans text-sm font-semibold text-cream/60">{g.label}</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="border border-cream/60 px-3 py-1 font-sans text-[13px] font-semibold text-cream/95"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-14 border-t border-cream/20 pt-10">
              <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-cream/60">
                Extracurricular | Achievements
              </p>
              

              <ul className="mt-8 flex flex-col gap-5 font-sans text-[15px] font-medium leading-relaxed text-cream/90">
                {ACHIEVEMENTS.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span aria-hidden className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-cream" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
