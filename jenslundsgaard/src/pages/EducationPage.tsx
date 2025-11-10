export default function EducationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 gap-1 text-center">
      <div className="max-w-1xl">
        <h2 className="text-4xl font-bold text-white mb-12 p-10">Education</h2>
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
              <p className="text-zinc-400 font-small mb-2">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2 justify-center ">
                {[
                   "Programming II", "Linear Algebra", "Modern Algebra", "Introduction to Databases", "Elementary Topology"
                ].map((course) => (
                  <span key={course} className="px-5 py-5 bg-zinc-800 text-zinc-300 text-sm p-5">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
