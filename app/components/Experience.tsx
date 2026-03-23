import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'academic',
    title: 'Assistant Professor',
    organization: 'Presidency University, Bangalore',
    period: 'Sep 2025 – Present',
    description: 'Teaching undergraduate courses including Malware Analysis, IDPS, Generative AI, and Python. Coordinating FDPs and MoUs.',
    highlights: [
      'Curriculum development for emerging technologies',
      'Faculty coordination and academic-industry collaboration'
    ]
  },
  {
    type: 'academic',
    title: 'Teaching Associate',
    organization: 'Ramaiah Institute of Technology, Bangalore',
    period: 'Dec 2024 – Aug 2025',
    description: 'Delivered full-stack & web programming courses with hands-on labs. Coordinated workshops and contributed to syllabus revision.',
    highlights: [
      'Full Stack Development Workshop coordination',
      'Syllabus revision for Cloud Computing, DevOps, Blockchain'
    ]
  },
  {
    type: 'industry',
    title: 'Senior Enterprise Operations Executive',
    organization: 'Intellipaat, Bangalore',
    period: 'Feb 2024 – Nov 2024',
    description: 'Led corporate and individual training in Full Stack, Salesforce, and Cloud technologies using various virtual platforms.',
    highlights: [
      'Delivered tailored technical content',
      'Supported learners in data-driven decision-making tools'
    ]
  },
  {
    type: 'industry',
    title: 'Site Reliability Engineer (S.R.E)',
    organization: 'NoBroker, Bangalore',
    period: 'Aug 2022 – Dec 2023',
    description: 'Focused on system reliability, scalability, and performance. Implemented automation and monitoring solutions.',
    highlights: [
      'Improved system uptime and reliability',
      'Automation and monitoring implementation'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDIzMTgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Experience Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-12 text-[#2C3E50] text-center">Experience</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4A90A4] to-[#2C3E50]"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 pl-20"
              >
                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-[#4A90A4] to-[#2C3E50] rounded-full flex items-center justify-center shadow-lg">
                  {exp.type === 'academic' ? (
                    <GraduationCap className="w-8 h-8 text-white" />
                  ) : (
                    <Briefcase className="w-8 h-8 text-white" />
                  )}
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-2xl text-[#2C3E50]">{exp.title}</h3>
                    <span className="text-sm text-white bg-[#4A90A4] px-3 py-1 rounded-full font-medium">{exp.period}</span>
                  </div>
                  <p className="text-[#5D6D7E] mb-3 font-medium">{exp.organization}</p>
                  <p className="text-[#5D6D7E] mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-[#2C3E50] flex items-start">
                        <span className="text-[#4A90A4] mr-2">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}