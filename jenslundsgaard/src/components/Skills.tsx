interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Next.js", "TailwindCSS", "PyTorch", "Pandas", "NumPy"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "PostgreSQL", "MongoDB", "AWS", "Linux", "VS Code"]
    },
    {
      title: "Concepts",
      skills: ["Data Structures", "Algorithms", "Machine Learning", "Web Development", "Database Design", "RESTful APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>
        <div>
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
