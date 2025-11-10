export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-8 text-center p-10">About Me</h2>
        <div className="text-zinc-300 space-y-4 text-lg">
          <p>
            I'm a Computer Science and Mathematics student at the University of Wisconsin-Madison, passionate about
            building innovative software solutions and exploring cutting-edge technologies.
          </p>
          <p>
            With experience in machine learning, data analysis, and full-stack development, I enjoy
            tackling complex problems and creating impactful applications. I'm particularly interested
            in AI, data science, and bioinformatics. 
          </p>
          <p>
            My long term goal as a developer and scientist is to use theory-based techniques such as topological data analysis and deep learning to study and develop medicine for diseases like cancer, Alzheimer's as well as more overlooked, poorly understood yet debilatating chronic conditions such as PCAS (long Covid), ME/CFS and POTS.
          </p>
        </div>
      </div>
    </div>
  );
}
