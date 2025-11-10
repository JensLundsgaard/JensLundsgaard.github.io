interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

function ExperienceItem({ title, company, period, location, description }: ExperienceItemProps) {
  return (
    <div className="pb-12 text-center">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-zinc-400">{company}</p>
        <div className="text-zinc-500 text-sm mt-2">
          <p>{period}, <b>{location}</b></p>
        </div>
      </div>
      <ul className="list-none text-zinc-300 space-y-2 mt-4">
        {description.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperiencePage() {
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
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
        <div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
}
