export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 text-center">
      <div className="max-w-4xl ">
        <h2 className="text-4xl font-bold text-white mb-8 p-10">Get In Touch</h2>
        <p className="text-zinc-300 text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-zinc-400 hover:text-white transition-colors">
          
          <div className="flex gap-6 text-zinc-400">
            <a
            href="mailto:jenslundsgaard@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email Me
          </a>
            <a
              href="https://www.linkedin.com/in/jens-lundsgaard-13700625b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/JensLundsgaard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
