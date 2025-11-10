export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Education</h2>
        <div className="border-l-2 border-zinc-700 pl-6 relative">
          <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[7px] top-1.5"></div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">University of Wisconsin-Madison</h3>
              <p className="text-xl text-zinc-400 mt-1">Bachelor of Science in Computer Science</p>
            </div>
            <div className="text-zinc-500 text-sm md:text-right mt-2 md:mt-0">
              <p>Expected May 2026</p>
              <p>Madison, WI</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-zinc-300 font-medium">GPA: 3.8/4.0</p>
            </div>
            <div>
              <p className="text-zinc-400 font-medium mb-2">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures',
                  'Algorithms',
                  'Machine Learning',
                  'Database Systems',
                  'Operating Systems',
                  'Web Development',
                  'Software Engineering',
                  'Computer Networks'
                ].map((course) => (
                  <span key={course} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
