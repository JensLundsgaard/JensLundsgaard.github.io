export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Education</h2>
        <div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-white">University of Wisconsin-Madison</h3>
            <p className="text-xl text-zinc-400 mt-1">Computer Sciences and Mathematics B.S.</p>
            <div className="text-zinc-500 text-sm mt-2">
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
              <div className="flex flex-wrap gap-2 justify-center">
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
