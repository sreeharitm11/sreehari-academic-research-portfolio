import { motion } from 'motion/react';
import { FileText, Award, ArrowUpRight, ExternalLink } from 'lucide-react';

const publications = [
  { title: 'Detection of Phishing Websites Using Machine Learning', authors: 'Geetanjali Rave and Sreehari T M', venue: 'IEEE CONECCT 2025', type: 'published', href: 'https://ieeexplore.ieee.org/' },
  { title: 'Predictive Model for 6-Month Prognosis of Stroke Patients Using Machine Learning', authors: 'Geetanjali Rave and Sreehari T M', venue: 'IEEE MIRE 2025', type: 'published', href: 'https://ieeexplore.ieee.org/' },
  { title: 'A Real-Time Application for Chronic Kidney Disease (CKD) Stage Prediction Using Machine Learning', authors: 'Sreehari T M and Geetanjali Rave', venue: 'Springer ICTCS 2025', type: 'published', href: 'https://link.springer.com/' },
  { title: 'Machine Learning-assisted Optimization of TiO2/CuO Nanocomposites for Enhanced Energy Storage Performance', authors: 'Geetanjali R, Sreehari T M, V. Vignesh, Varsha Bodade, D. Parameswari, and Jose Anand', venue: 'Journal of Environmental Nanotechnology 2026', type: 'published', href: 'http://www.jentonline.org/' },
  { title: 'REPACK360: An Intelligent Multi-Tier Platform for Sustainable Packaging with Automated Environmental Impact Assessment', authors: 'Sreehari T M, Geetanjali R, and Gireesh Subrahmanya Hegde', venue: 'Accepted · ICTMSD 2025', type: 'accepted', href: '#' },
  { title: 'Sustainable Optimization of Natural Fiber Composites for Aircraft Fuselage Using ML and MCDM', authors: 'Geetanjali Rave and Sreehari T M', venue: 'Accepted · Journal of Natural Fibers (Q3)', type: 'accepted', href: 'https://www.tandfonline.com/journals/unjf20' },
];

const patents = [
  { title: 'Security Evaluation of IoT Networks: Hybrid Attack Analysis on LoRa Protocol', number: '202521035014 A', date: 'May 2025' },
  { title: 'Sustainable Machine-Learning-Based Demand Forecasting and Energy Optimization System', number: '202641009448 A', date: 'Feb 2026' },
];

export function Publications() {
  return (
    <section id="publications" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
        >
          Academic Output
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium tracking-tight mb-16"
        >
          Publications &{' '}
          <span className="font-display italic text-accent">patents</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Publications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-4 h-4 text-accent" />
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Research Papers</p>
            </div>
            <div className="space-y-3">
              {publications.map((pub, i) => (
                <motion.a
                  key={pub.title}
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-accent/30 transition-colors cursor-pointer block"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        pub.type === 'published'
                          ? 'bg-accent/15 text-accent border border-accent/30'
                          : 'bg-secondary border border-border text-muted-foreground'
                      }`}
                    >
                      {pub.type === 'published' ? '✓ Published' : '✓ Accepted'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="text-sm font-medium text-foreground leading-snug mb-2">{pub.title}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{pub.authors}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-accent font-medium">{pub.venue}</p>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-accent transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Patents + Membership */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Patents Filed</p>
            </div>
            <div className="space-y-3 mb-8">
              {patents.map((patent, i) => (
                <motion.div
                  key={patent.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-card p-5 hover:border-accent/30 transition-colors"
                >
                  <h4 className="text-sm font-medium text-foreground leading-snug mb-2">{patent.title}</h4>
                  <p className="text-xs text-muted-foreground mb-1">Application No. {patent.number}</p>
                  <p className="text-xs text-accent font-medium">Published: {patent.date}</p>
                </motion.div>
              ))}
            </div>

            {/* Academic Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Academic Profiles</p>
              <div className="space-y-3">
                {[
                  { label: 'ORCID', value: '0009-0006-3707-0928', href: 'https://orcid.org/0009-0006-3707-0928' },
                  { label: 'Scopus Author ID', value: '60141361300', href: 'https://www.scopus.com/authid/detail.uri?authorId=60141361300' },
                  { label: 'IAENG Member', value: '#544087 · Since Dec 2025', href: '#' },
                ].map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground">{profile.label}</p>
                      <p className="text-sm text-foreground">{profile.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
