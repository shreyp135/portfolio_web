export default function Hero() {
  return (
    <section id="top" className="relative section-frame overflow-hidden">
      <div className="mesh mesh-hero" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1400px] pt-28 sm:pt-32">
        <div className="page-grid">
          {/* Left Sidebar Contact Links */}
          <div className="hidden px-8 pb-16 md:flex md:items-start">
            <ul className="mt-56 flex flex-col gap-4 pt-2 font-sans text-lg font-semibold text-ink/80">
              <li>
                <a href="tel:+919335120023" className="hover:opacity-70">
                  +91 93351 20023
                </a>
              </li>
              <li>
                <a href="mailto:shreyanshpaliwal18@gmail.com" className="break-words hover:opacity-70">
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

          <div className="grid-line" aria-hidden />

          {/* Main Hero Column */}
          <div className="px-6 pb-16 sm:px-10 sm:pb-24">
            <div className="flex flex-col items-start gap-8 border-b border-line pb-14">
              <h1 className="w-full max-w-2xl font-serif text-[13vw] font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
                <span className="block">Shreyansh</span>
                <span className="block pl-[3em]">Paliwal</span>
              </h1>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-ink/70">
                Software Engineer &mdash; New Delhi
              </p>
            </div>

            {/* Bio and CTA section */}
            <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md font-sans text-lg font-medium leading-relaxed text-ink sm:text-xl">
                Full-stack engineer building agentic AI pipelines and real-time systems, from complex backends to production interfaces.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="arrow-btn"
                >
                  View resume <span aria-hidden className="arrow-glyph">→</span>
                </a>
                <a href="#experience" className="arrow-btn">
                  See my work <span aria-hidden className="arrow-glyph">→</span>
                </a>
                <a href="#contact" className="arrow-btn">
                  Get in touch <span aria-hidden className="arrow-glyph">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
