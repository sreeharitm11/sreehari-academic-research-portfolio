import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    category: 'Deep Learning',
    title: 'Understanding Variational Autoencoders for Anomaly Detection',
    excerpt: 'Exploring how VAEs can be used to detect fraudulent transactions in highly imbalanced datasets, with practical implementation insights and ablation study results.',
    readTime: '10 min read',
    publishedAt: 'Mar 2026',
  },
  {
    category: 'AI · Healthcare',
    title: 'Building Explainable AI Models for Healthcare',
    excerpt: 'Why interpretability matters in medical AI and how SHAP values can help clinicians trust machine learning predictions — with a practical knee MRI case study.',
    readTime: '12 min read',
    publishedAt: 'Feb 2026',
  },
  {
    category: 'SRE · DevOps',
    title: 'Site Reliability Engineering: Lessons from Production',
    excerpt: 'Key takeaways from managing large-scale systems, monitoring strategies, and maintaining 99.9% uptime in real-world applications at NoBroker.',
    readTime: '8 min read',
    publishedAt: 'Jan 2026',
  },
  {
    category: 'Cybersecurity',
    title: 'LoRa Protocol Security: Hybrid Attack Analysis',
    excerpt: 'Investigating security vulnerabilities in IoT networks using LoRa protocol and proposing defensive strategies for edge devices in smart infrastructure.',
    readTime: '9 min read',
    publishedAt: 'Dec 2025',
  },
  {
    category: 'Edge AI',
    title: 'From Edge to Cloud: Deploying ML Models Efficiently',
    excerpt: 'Practical guide to deploying TensorFlow Lite models on edge devices like Raspberry Pi while maintaining low latency and acceptable accuracy trade-offs.',
    readTime: '11 min read',
    publishedAt: 'Nov 2025',
  },
  {
    category: 'Data Engineering',
    title: 'Data Engineering for Medical Imaging Datasets',
    excerpt: 'Handling large MRI volumes, preprocessing pipelines, and building efficient data loaders for deep learning research with PyTorch and the MRNet dataset.',
    readTime: '13 min read',
    publishedAt: 'Oct 2025',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-28 px-6 border-t border-border">
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
              From the Desk
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium tracking-tight"
            >
              Thoughts &{' '}
              <span className="font-display italic text-accent">writings</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-sm text-muted-foreground text-sm leading-relaxed md:text-right"
          >
            Documenting my journey through AI research, medical imaging systems, cloud engineering, and cybersecurity.
          </motion.p>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-accent/30 hover:bg-secondary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-accent">
                  {post.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-medium text-foreground leading-snug mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border">
                <span>{post.readTime}</span>
                <span>·</span>
                <span>{post.publishedAt}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
