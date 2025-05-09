import { motion } from 'framer-motion';

const SkillsEducation = () => {
  const skills = [
    {
      category: "Design",
      items: [
        "UI/UX Design with Figma",
        "Graphic Design with Corel Draw & Adobe Illustrator",
        "Photo & Video Editing"
      ]
    },
    {
      category: "Development",
      items: [
        "PHP & Laravel",
        "Java",
        "HTML/CSS",
        "Python",
        "C++"
      ]
    },
    {
      category: "Multimedia",
      items: [
        "Photography",
        "Video Production",
        "Adobe Lightroom",
        "Adobe Premiere",
        "Filmora"
      ]
    }
  ];

  const education = [
    {
      school: "Politeknik Negeri Jember",
      degree: "D4 Teknik Informatika",
      period: "2021 - Present",
      description: "Currently pursuing a degree in Information Technology with focus on web development and software engineering."
    },
    {
      school: "SMKN 1 Bagor",
      degree: "Multimedia",
      period: "2018 - 2021",
      description: "Specialized in multimedia production, including graphic design, video editing, and digital content creation."
    }
  ];

  return (
    <section id="skills-education" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Skills & Education</h2>
          <p className="text-light/80">My expertise and academic background</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Skills</h3>
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-dark/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-primary/30 hover:border-primary/50 transition-colors">
                <h4 className="text-lg font-medium text-primary mb-4">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-light/80">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-dark/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-primary/30 hover:border-primary/50 transition-colors">
                <h4 className="text-lg font-medium text-primary">{edu.school}</h4>
                <p className="text-light font-medium">{edu.degree}</p>
                <p className="text-sm text-light/60 mb-3">{edu.period}</p>
                <p className="text-light/80">{edu.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation; 