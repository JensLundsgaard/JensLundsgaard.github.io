export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Jens Lundsgaard</h1>
          <div className="flex gap-8">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-zinc-400 hover:text-white transition-colors">Experience</a>
            <a href="#education" className="text-zinc-400 hover:text-white transition-colors">Education</a>
            <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
