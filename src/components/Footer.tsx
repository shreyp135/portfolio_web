export default function Footer() {
  return (
    <footer className="bg-[#f3efe6]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-8 font-sans text-sm text-ink sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>&copy; {new Date().getFullYear()} Shreyansh Paliwal</p>
        <p className="text-ink/60">Built with Next.js &amp; Tailwind CSS</p>
        <ul className="flex flex-wrap gap-6">
          <li><a href="#top" className="hover:opacity-60">Top</a></li>
          <li><a href="#experience" className="hover:opacity-60">Experience</a></li>
          <li><a href="#work" className="hover:opacity-60">Work</a></li>
          <li><a href="#contact" className="hover:opacity-60">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}
