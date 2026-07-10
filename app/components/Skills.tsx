import { motion } from 'motion/react';
import { Code2, Brain, Wrench, Cpu, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming & Development',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript / TypeScript', level: 82 },
      { name: 'React / Node.js', level: 78 },
      { name: 'Java', level: 70 },
      { name: 'Flask / FastAPI', level: 80 },
      { name: 'MongoDB / MySQL', level: 75 },
    ],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    skills: [
      { name: 'PyTorch', level: 92 },
      { name: 'Deep Learning / CNNs', level: 90 },
      { name: 'SHAP & Explainability (XAI)', level: 85 },
      { name: 'NLP & LLMs', level: 75 },
      { name: 'TensorFlow / Keras', level: 80 },
      { name: 'Scikit-learn', level: 88 },
    ],
  },
  {
    icon: Wrench,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 78 },
      { name: 'Docker / Kubernetes', level: 72 },
      { name: 'Azure', level: 70 },
      { name: 'CI/CD & Git', level: 85 },
      { name: 'System Reliability (SRE)', level: 80 },
      { name: 'GCP', level: 65 },
    ],
  },
  {
    icon: Cpu,
    title: 'Hardware & Platforms',
    skills: [
      { name: 'NVIDIA H200 GPUs', level: 90 },
      { name: 'NVIDIA DGX Systems', level: 85 },
      { name: 'Raspberry Pi / Edge AI', level: 80 },
      { name: 'Anaconda / Google Colab', level: 95 },
      { name: 'Postman / Swagger', level: 85 },
      { name: 'Android Studio / Java', level: 70 },
    ],
  },
];

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', level: 'Foundational' },
  { name: 'Microsoft Identity and Access Administrator', issuer: 'Microsoft', level: 'Learning Badge' },
  { name: 'Microsoft Security Operations Analyst', issuer: 'Microsoft', level: 'Learning Badge' },
  { name: 'Microsoft Cybersecurity Architect', issuer: 'Microsoft', level: 'Learning Badge' },
  { name: 'Microsoft Azure Security Technologies', issuer: 'Microsoft', level: 'Learning Badge' },
  { name: 'Microsoft Azure Administrator', issuer: 'Microsoft', level: 'Learning Badge' },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="flex flex-col gap-1.5"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground/80">{name}</span>
        <span className="text-muted-foreground text-xs">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
        >
          Technical Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium tracking-tight mb-16"
        >
          Stack &{' '}
          <span className="font-display italic text-accent">expertise</span>
        </motion.h2>

        {/* Skill categories with proficiency bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-6 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-accent/10">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {cat.skills.map((skill, j) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 0.1 + j * 0.07}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Certifications</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-5 flex items-start gap-3 hover:border-accent/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground leading-snug mb-1">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <span className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                    {cert.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}