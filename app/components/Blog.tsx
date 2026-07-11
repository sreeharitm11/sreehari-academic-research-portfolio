import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    category: 'AI · Healthcare',
    title: 'Handling Severe Class Imbalance in Clinical Datasets',
    excerpt: 'Practical techniques using Variational Autoencoders (VAEs) and temporal-aware SMOTE to predict stroke patient prognosis and diagnostic severity in highly skewed datasets.',
    readTime: '11 min read',
    publishedAt: 'Jul 2026',
  },
  {
    category: 'Cloud · DevOps',
    title: 'Deploying Explainable ML Models: From Flask Prototypes to Vercel Serverless',
    excerpt: 'Architecting lightweight serverless endpoints for ML inference, optimizing bundle sizes, and implementing real-time logging to ensure high system reliability in production.',
    readTime: '8 min read',
    publishedAt: 'May 2026',
  },
  {
    category: 'Security · ML',
    title: 'Lexical Analysis vs. Deep Learning: Detecting Phishing Websites at Scale',
    excerpt: 'Comparing XGBoost lexical feature analysis with NLP classifiers to identify malicious URLs in real-time, achieving 96.8% detection accuracy.',
    readTime: '10 min read',
    publishedAt: 'Feb 2026',
  },
  {
    category: 'Sustainability',
    title: 'Designing REPACK360: Multi-Criteria Decision Making for Sustainable Systems',
    excerpt: 'Using machine learning and MCDM algorithms to optimize sustainable packaging selections based on environmental impact and supplier negotiation constraints.',
    readTime: '11 min read',
    publishedAt: 'Nov 2025',
  },
  {
    category: 'Explainable AI',
    title: 'Why Interpretability Matters in Healthcare: Integrating SHAP in Clinical AI',
    excerpt: 'A deep dive into how SHapley Additive exPlanations (SHAP) and attention maps help clinicians trust and audit black-box machine learning predictions in diagnostic settings.',
    readTime: '12 min read',
    publishedAt: 'Jul 2025',
  },
  {
    category: 'Deep Learning',
    title: 'Automating Knee Injury Diagnosis: A Deep Learning Workflow with MRNet',
    excerpt: 'How to build custom PyTorch data loaders and CNN architectures to process 3D MRI volumes for automated ACL and meniscus tear detection.',
    readTime: '13 min read',
    publishedAt: 'Mar 2025',
  },
  {
    category: 'Cybersecurity',
    title: 'LoRa Protocol Security: Analyzing Hybrid Attacks on IoT Networks',
    excerpt: 'Investigating security vulnerabilities in IoT networks using LoRaWAN and proposing defensive key exchange protocols to safeguard low-power edge devices.',
    readTime: '9 min read',
    publishedAt: 'Dec 2024',
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
