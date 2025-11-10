export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Jens Lundsgaard</h1>
        <p className="text-2xl text-zinc-400 mb-8">Computer Science Student & Software Developer</p>
        <div className="flex gap-6 justify-center text-zinc-400">
          <a href="mailto:jenslundsgaard@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
          <span>•</span>
          <a href="https://linkedin.com/in/jens-lundsgaard" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <span>•</span>
          <a href="https://github.com/JensLundsgaard" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
