import { motion } from 'motion/react';
import { Brain, Shield, TrendingUp, ArrowUpRight } from 'lucide-react';

const areas = [
  {
    icon: Brain,
    title: 'AI for Medical Imaging',
    body: 'Developing deep learning models for automated knee MRI diagnosis. Focused on ACL tears, meniscus injuries, and abnormality detection using PyTorch and the MRNet dataset.',
    tags: ['PyTorch', 'CNN', 'MRNet', 'Medical Imaging'],
  },
  {
    icon: Shield,
    title: 'Explainable AI (XAI)',
    body: 'Creating interpretable AI systems clinicians can trust. Using SHAP values, attention mechanisms, and GradCAM to make deep learning decisions transparent and auditable.',
    tags: ['SHAP', 'GradCAM', 'Attention Maps', 'XAI'],
  },
  {
    icon: TrendingUp,
    title: 'Model Reliability',
    body: 'Improving model robustness through variational autoencoders, ensemble methods, and robust cross-validation strategies for high-stakes clinical applications.',
    tags: ['VAE', 'Ensemble', 'Uncertainty', 'Clinical AI'],
  },
];

export function Research() {
  return (
    <section id="research" className="py-28 px-6 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
            >
              Current Research
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium tracking-tight"
            >
              PhD Research at{' '}
              <span className="font-display italic text-accent">BMS–VTU</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-sm text-muted-foreground text-sm leading-relaxed md:text-right"
          >
            Exploring the intersection of artificial intelligence and medical imaging
            to improve diagnostic accuracy, reliability, and clinical trust.
          </motion.p>
        </div>

        {/* Research cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-card p-7 flex flex-col gap-5 hover:border-accent/30 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-accent/10 w-fit">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-foreground mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.body}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Research context banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 rounded-2xl border border-accent/20 bg-accent/5 p-7 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-1">PhD Institution</p>
            <p className="text-foreground font-medium text-lg">BMS Institute of Technology and Management</p>
            <p className="text-muted-foreground text-sm">Visvesvaraya Technological University (VTU) · Bangalore</p>
          </div>
          <a
            href="https://orcid.org/0009-0006-3707-0928"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 text-accent text-sm hover:bg-accent/10 transition-all cursor-pointer self-start md:self-auto"
          >
            ORCID Profile <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}