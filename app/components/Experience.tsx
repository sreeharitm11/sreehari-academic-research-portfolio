import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, Sparkles } from 'lucide-react';

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
  const [filter, setFilter] = useState<'all' | 'academic' | 'industry'>('all');

  const filtered = experiences.filter((exp) => {
    if (filter === 'all') return true;
    return exp.type === filter;
  });

  return (
    <section id="experience" className="py-28 px-6 border-t border-border bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
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
              className="text-4xl md:text-5xl font-medium tracking-tight"
            >
              Where I've{' '}
              <span className="font-display italic text-accent">taught & built</span>
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <div className="flex rounded-full border border-border bg-card p-1 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Track' },
              { id: 'academic', label: 'Academic' },
              { id: 'industry', label: 'Industry' },
            ].map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-foreground text-background shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-8 space-y-6">
          {/* Vertical track line */}
          <div className="absolute left-[19px] md:left-[27px] top-4 bottom-4 w-0.5 bg-border pointer-events-none" />

          <AnimatePresence mode="popLayout">
            {filtered.map((exp, i) => {
              const isAcademic = exp.type === 'academic';
              return (
                <motion.div
                  key={exp.title + exp.org}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  layout
                  className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 flex gap-6 hover:border-accent/30 transition-all duration-300 shadow-sm"
                >
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[30px] md:-left-[38px] top-8 z-10">
                    <div className={`w-5 h-5 rounded-full border-2 border-background flex items-center justify-center shadow-md transition-colors duration-300 ${
                      isAcademic ? 'bg-accent' : 'bg-foreground'
                    }`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-background" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 hidden sm:block">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isAcademic ? 'bg-accent/10' : 'bg-secondary'
                    }`}>
                      {isAcademic
                        ? <GraduationCap className="w-5 h-5 text-accent" />
                        : <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      }
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full border ${
                          isAcademic
                            ? 'bg-accent/10 border-accent/25 text-accent'
                            : 'bg-secondary border-border text-muted-foreground'
                        }`}>
                          {isAcademic ? 'Academic' : 'Industry'}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium text-foreground mb-1 group-hover:text-accent transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 font-medium">{exp.org}</p>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">{exp.desc}</p>
                      
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="text-sm text-muted-foreground/80 flex items-start gap-2">
                            <span className="text-accent mt-1 flex-shrink-0">→</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Period Badge */}
                    <div className="flex-shrink-0 self-start md:self-auto">
                      <span className="inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-full bg-secondary border border-border text-muted-foreground font-medium">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}