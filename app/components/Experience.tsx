import { motion } from 'motion/react';
import { GraduationCap, Briefcase } from 'lucide-react';

const experiences = [
  {
    type: 'academic',
    title: 'Assistant Professor',
    org: 'Presidency University, Bangalore',
    period: 'Sep 2025 – Present',
    desc: 'Teaching undergraduate courses including Malware Analysis, IDPS, Generative AI, and Python. Coordinating FDPs and MoUs with industry partners.',
    highlights: ['Curriculum development for emerging technologies', 'Faculty coordination and academic–industry collaboration'],
  },
  {
    type: 'academic',
    title: 'Teaching Associate',
    org: 'Ramaiah Institute of Technology, Bangalore',
    period: 'Dec 2024 – Aug 2025',
    desc: 'Delivered full-stack & web programming courses with hands-on labs. Coordinated workshops and contributed to syllabus revision for Cloud Computing, DevOps, and Blockchain.',
    highlights: ['Full Stack Development Workshop coordination', 'Syllabus revision for Cloud Computing, DevOps, Blockchain'],
  },
  {
    type: 'industry',
    title: 'Senior Enterprise Operations Executive',
    org: 'Intellipaat, Bangalore',
    period: 'Feb 2024 – Nov 2024',
    desc: 'Led corporate and individual training in Full Stack, Salesforce, and Cloud technologies using various virtual platforms.',
    highlights: ['Delivered tailored technical content', 'Supported learners in data-driven decision-making tools'],
  },
  {
    type: 'industry',
    title: 'Site Reliability Engineer',
    org: 'NoBroker, Bangalore',
    period: 'Aug 2022 – Dec 2023',
    desc: 'Focused on system reliability, scalability, and performance for high-traffic production systems. Implemented automation and monitoring solutions.',
    highlights: ['Improved system uptime and reliability', 'Automation and monitoring implementation at scale'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium tracking-tight mb-16"
        >
          Where I've{' '}
          <span className="font-display italic text-accent">taught & built</span>
        </motion.h2>

        <div className="space-y-px border border-border rounded-2xl overflow-hidden">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.org}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border-b border-border last:border-b-0 p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:bg-secondary/40 transition-colors duration-200"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  {exp.type === 'academic'
                    ? <GraduationCap className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    : <Briefcase className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  }
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {exp.type === 'academic' ? 'Academic' : 'Industry'}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{exp.org}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">{exp.desc}</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-0.5">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <span className="inline-block text-xs px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}