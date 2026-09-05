const REPEATS = Array.from({ length: 9 });

export default function About() {
  return (
    <section id="about" className="relative section-frame overflow-hidden">
      <div className="mesh mesh-about" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="page-grid">
          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-ink/70">
              Background &amp;
            </p>
            <h2 className="mt-3 break-words font-serif text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              Education
            </h2>
          </div>
          <div className="grid-line" aria-hidden />

          <div className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-24">
            <p className="max-w-md font-sans text-lg font-medium leading-relaxed text-ink sm:text-xl">
              Currently a B.Tech Information Technology student at Guru Gobind
              Singh Indraprastha University (MAIT), New Delhi, carrying a 9.08
              CGPA through Data Structures &amp; Algorithms, Databases,
              Operating Systems, and Artificial Intelligence, and
              shipping production code alongside it.
            </p>

            <div
              className="pointer-events-none absolute inset-x-0 top-[44%] -z-0 select-none whitespace-nowrap font-serif text-[7vw] font-bold leading-none text-ink/10 sm:top-[40%]"
              aria-hidden
            >
              {REPEATS.map((_, i) => (
                <div key={i}>Full&#8202;&ndash;&#8202;Stack Engineer</div>
              ))}
            </div>

            <dl className="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 font-sans text-sm sm:text-base">
              <div>
                <dt className="font-semibold text-ink/70">Based in</dt>
                <dd className="mt-1 font-bold text-ink">New Delhi, India</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink/70">Education</dt>
                <dd className="mt-1 font-bold text-ink">MAIT &middot; 2023&ndash;2027</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink/70">CGPA</dt>
                <dd className="mt-1 font-bold text-ink">9.08 / 10</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink/70">Focus</dt>
                <dd className="mt-1 font-bold text-ink">
                  Full-stack &amp; agentic systems
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
