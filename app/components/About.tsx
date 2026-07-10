import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Heart, MapPin } from 'lucide-react';

const cards = [
  {
    icon: GraduationCap,
    label: 'Research Focus',
    title: 'AI for Medical Imaging',
    body: 'Building deep learning models for automated knee MRI diagnosis — ACL tears, meniscus injuries, and abnormality detection using PyTorch & MRNet.',
    accent: true,
  },
  {
    icon: Heart,
    label: 'Primary Drive',
    title: 'Explainability First',
    body: 'AI that clinicians can trust. Using SHAP, attention mechanisms and VAEs to make model decisions transparent and actionable.',
    accent: false,
  },
  {
    icon: Briefcase,
    label: 'Current Role',
    title: 'Assistant Professor',
    body: 'Teaching at Presidency University, Bangalore — Malware Analysis, Generative AI, IDPS, and Python. Coordinating FDPs and academic–industry MoUs.',
    accent: false,
  },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-6"
        >
          About
        </motion.p>

        {/* Intro prose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6">
            Where{' '}
            <span className="font-display italic text-accent">academic rigor</span>{' '}
            meets real-world AI systems
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm Sreehari T M — a PhD Scholar at BMS Institute of Technology and Management (VTU)
            and Assistant Professor at Presidency University, Bangalore. My work sits at the
            intersection of deep learning, medical imaging, and explainable AI.
          </p>
        </motion.div>

        {/* Row 1: Profile card + Feature cards (2-col right) */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Profile photo card — spans 1 column, 2 visual rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:row-span-2 rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
          >
            {/* Avatar area */}
            <div className="flex-1 min-h-[280px] relative bg-secondary overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Sreehari T M"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            </div>
            {/* Name plate */}
            <div className="p-5 border-t border-border">
              <p className="text-foreground font-medium">Sreehari T M</p>
              <p className="text-muted-foreground text-sm mt-0.5">PhD Scholar · AI & Medical Imaging</p>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-accent">Open to collaboration</span>
              </div>
            </div>
          </motion.div>

          {/* Feature cards — 2 columns × 2 rows on md+ */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative rounded-2xl border border-border p-7 flex flex-col gap-4 hover:border-accent/30 transition-all duration-300 ${
                    card.accent ? 'bg-accent/10' : 'bg-card'
                  } ${i === 2 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{card.label}</span>
                    <div className={`p-2 rounded-lg ${card.accent ? 'bg-accent/20' : 'bg-secondary'}`}>
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Interests + Location */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Wide interests card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl border border-border bg-card p-7 flex flex-col gap-6 hover:border-accent/30 transition-all duration-300"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Interests & Stack</span>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'Deep Learning', 'SHAP', 'LLMs', 'Cloud Computing', 'Cybersecurity', 'System Design', 'RAG Systems', 'Variational Autoencoders', 'Edge AI', 'React', 'DevOps'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-7 flex flex-col justify-between gap-4 hover:border-accent/30 transition-all duration-300"
          >
            <MapPin className="w-5 h-5 text-accent" />
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Based in</p>
              <p className="text-2xl font-medium">Bangalore</p>
              <p className="text-muted-foreground text-sm mt-1">India · Available globally for research</p>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Currently Working On */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 rounded-2xl border border-accent/20 bg-accent/5 p-7"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-accent font-medium">Currently Working On</span>
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-2">
                PhD Research
                <span className="font-display italic text-accent"> in Progress</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                Developing a multi-stage explainable deep learning pipeline for automated knee MRI analysis at BMS–VTU.
                Currently focused on integrating attention-based XAI with ensemble methods to improve clinical interpretability.
              </p>
            </div>
            {/* Progress milestones */}
            <div className="flex flex-col gap-3 min-w-[220px]">
              {[
                { label: 'Literature Review', done: true },
                { label: 'Dataset Acquisition & Preprocessing', done: true },
                { label: 'Baseline Model Training', done: true },
                { label: 'XAI Integration & Validation', done: false },
                { label: 'Journal Submission', done: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center border ${
                    item.done
                      ? 'bg-accent border-accent'
                      : 'border-border bg-transparent'
                  }`}>
                    {item.done && <span className="text-white text-[9px] font-bold">✓</span>}
                  </div>
                  <span className={`text-sm ${item.done ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}