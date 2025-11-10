interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

function ExperienceItem({ title, company, period, location, description }: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-zinc-700 pl-6 pb-12 relative">
      <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[7px] top-1.5"></div>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-zinc-400">{company}</p>
        </div>
        <div className="text-zinc-500 text-sm md:text-right mt-1 md:mt-0">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      title: "AI Research Assistant",
      company: "University of Wisconsin-Madison",
      period: "June 2024 - Present",
      location: "Madison, WI",
      description: [
        "Developed machine learning models for data analysis and prediction tasks",
        "Collaborated with research team to publish findings in academic conferences",
        "Implemented data preprocessing pipelines using Python and pandas"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Tech Company",
      period: "Summer 2023",
      location: "Remote",
      description: [
        "Built full-stack web applications using React, Node.js, and PostgreSQL",
        "Improved application performance by 30% through code optimization",
        "Participated in agile development process and code reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
        <div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
