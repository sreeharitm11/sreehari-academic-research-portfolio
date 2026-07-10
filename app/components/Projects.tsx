import { motion } from 'motion/react';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    num: '01',
    type: 'Research · Web App',
    title: 'Knee Injury Diagnosis from MRI',
    github: 'https://github.com/sreeharitm',
    description: 'Deep learning workflow for automated knee abnormality, ACL tear, and meniscus tear analysis from MRI volumes using PyTorch and MRNet. Enables automated diagnostic support for orthopedic clinicians.',
    impact: 'Clinical decision support with sub-second inference',
    tags: ['PyTorch', 'Medical Imaging', 'Deep Learning', 'CNN'],
    date: 'Ongoing · 2024–25',
  },
  {
    num: '02',
    type: 'ML · Flask App',
    title: 'CKD Stage Prediction System',
    github: 'https://github.com/sreeharitm',
    description: 'Real-time, explainable application for chronic kidney disease stage prediction using clinical data. SHAP-based interpretability makes predictions auditable and actionable for clinicians.',
    impact: 'Sub-0.5s prediction latency · SHAP explanations',
    tags: ['Python', 'Machine Learning', 'Flask', 'SHAP'],
    date: 'Q3 2024',
  },
  {
    num: '03',
    type: 'Platform · MERN Stack',
    title: 'REPACK360: Sustainable Packaging Platform',
    github: 'https://github.com/sreeharitm',
    description: 'Multi-tier platform for sustainable packaging selection with automated supplier negotiation and eco-scoring across seven environmental criteria. Real-time tracking of waste, carbon, water, and energy impact.',
    impact: 'Real-time environmental impact scoring',
    tags: ['MERN Stack', 'REST APIs', 'Sustainability'],
    date: 'Q2 2024',
  },
  {
    num: '04',
    type: 'Edge AI · Mobile',
    title: 'EMOTUNE: Emotion-Aware Music System',
    github: 'https://github.com/sreeharitm',
    description: 'Real-time emotion recognition using facial expressions on Raspberry Pi 4 with MobileNetV2. Mood-adaptive music playback with low-latency on-device inference for personalized experiences.',
    impact: 'On-device inference at under 200ms',
    tags: ['TensorFlow Lite', 'Edge AI', 'Computer Vision', 'Raspberry Pi'],
    date: 'Q1 2024',
  },
  {
    num: '05',
    type: 'Platform · EdTech',
    title: 'CodeExam Pro: AI-Assisted Coding Platform',
    github: 'https://github.com/sreeharitm',
    description: 'Coding assessment platform with student and faculty dashboards, timed programming tests, and AI-assisted feedback using a sandboxed Docker execution environment.',
    impact: 'Automated evaluation · Zero manual grading',
    tags: ['React', 'TypeScript', 'MongoDB', 'Docker'],
    date: 'Q4 2023',
  },
  {
    num: '06',
    type: 'Security · ML',
    title: 'Phishing Website Detection',
    github: 'https://github.com/sreeharitm',
    description: 'Real-time phishing detection analyzing 31 lexical website features using Random Forest and XGBoost. Protects users from malicious URLs in real-time with 96.8% accuracy.',
    impact: '96.8% detection accuracy · Real-time inference',
    tags: ['Python', 'XGBoost', 'Cybersecurity', 'NLP'],
    date: 'Q2 2023',
  },
  {
    num: '07',
    type: 'Platform · IoT',
    title: 'Spotty: Smart Campus Navigation Platform',
    github: 'https://github.com/sreeharitm',
    description: 'Campus intelligence platform with live location pins, guard movement tracking, real-time chat, leaderboard-based engagement, and email OTP-based authentication.',
    impact: 'Socket.IO-powered real-time tracking',
    tags: ['React', 'Express.js', 'MongoDB', 'Socket.IO', 'Mappls SDK'],
    date: 'Q3 2023',
  },
  {
    num: '08',
    type: 'Deep Learning · Security',
    title: 'VAE Credit Card Fraud Detection',
    github: 'https://github.com/sreeharitm',
    description: 'Deep learning approach for highly imbalanced fraud detection using an enhanced Variational Autoencoder-Decoder (VAE) with temporal-aware SMOTE and adaptive denoising.',
    impact: 'Enhanced minority oversampling & fraud scoring',
    tags: ['Python', 'Deep Learning', 'VAE', 'SMOTE', 'Anomaly Detection'],
    date: 'Q2 2023',
  },
  {
    num: '09',
    type: 'Mobile · Safety',
    title: 'Women’s Safety App',
    github: 'https://github.com/sreeharitm',
    description: 'Android application that enables quick emergency alerts with real-time location sharing, contact notifications, and SOS sound alarms. Integrated Firebase for user authentication.',
    impact: 'Real-time emergency sharing & SOS triggers',
    tags: ['Android', 'Java', 'Firebase', 'Google Maps API'],
    date: 'Q1 2023',
  },
  {
    num: '10',
    type: 'Security · NLP',
    title: 'Cyberbullying Detection System',
    github: 'https://github.com/sreeharitm',
    description: 'Text classification system to identify potential cyberbullying in online messages using supervised machine learning models with Flask web interface.',
    impact: 'Supervised classification for online safety',
    tags: ['Python', 'NLP', 'Text Classification', 'Flask'],
    date: 'Q4 2022',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6 border-t border-border">
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
              Case Studies
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium tracking-tight"
            >
              Selected{' '}
              <span className="font-display italic text-accent">work</span>
            </motion.h2>
          </div>
          <motion.a
            href="https://github.com/sreeharitm"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors self-start md:self-auto"
          >
            <Github size={15} /> View all on GitHub <ArrowUpRight size={13} />
          </motion.a>
        </div>

        {/* Projects list */}
        <div className="space-y-px border border-border rounded-2xl overflow-hidden">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group bg-card border-b border-border last:border-b-0 p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:bg-secondary/40 transition-colors duration-200 cursor-default"
            >
              {/* Number */}
              <div className="flex-shrink-0 flex items-start">
                <span className="font-display italic text-5xl text-muted-foreground/30 group-hover:text-accent/40 transition-colors leading-none select-none">
                  {project.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{project.type}</span>
                    <span className="text-xs text-muted-foreground/50">·</span>
                    <span className="text-xs text-muted-foreground">{project.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xl">
                    {project.description}
                  </p>
                  {/* Impact */}
                  <p className="text-sm text-accent/80 font-medium">
                    → {project.impact}
                  </p>
                </div>

                {/* Tags + Actions */}
                <div className="flex flex-col justify-between gap-6 md:items-end">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all opacity-0 group-hover:opacity-100"
                      aria-label="GitHub"
                    >
                      <Github size={14} />
                    </a>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}