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

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "TypeScript", "React", "Rust"]
    },
    {
      title: "Tools",
      skills: [ "TensorFlow", "Keras", "PyTorch", "Docker", "Android Studio", "Vim", "Ubuntu Linux", "Visual Studio Code", "Wolfram Mathematica", "Numpy", "Pandas", "Matplotlib", "Tailscale", "SQL" ]
    },
    {
      title: "Skills",
      skills: [ "Topological Data Analysis", "Dimension Reduction Techniques", "Deep Learning", "Loss Functions", "Database Design"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>
        <div>
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}
