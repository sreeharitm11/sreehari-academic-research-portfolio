import { motion } from 'motion/react';
import { Mail, Linkedin, Github, ArrowUpRight, Send, Calendar, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status === 'error') setStatus('idle'); // Reset error when user retypes
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = 'https://calendly.com/sreeharitm11';

    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url });
      return;
    }

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.onload = () => {
      (window as any).Calendly.initPopupWidget({ url });
    };
    script.onerror = () => {
      window.open(url, '_blank');
    };
    document.body.appendChild(script);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        console.error('Contact API error:', data);
        setStatus('error');
      }
    } catch (err) {
      // True network failure — offer mailto fallback
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 px-6 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent/8 blur-3xl rounded-full" />
        </div>

        {/* Dramatic headline */}
        <div className="relative z-10 text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-muted-foreground mb-6"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-6"
          >
            From{' '}
            <span className="font-display italic text-accent">research</span>
            <br />
            to{' '}
            <span className="font-display italic">reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-lg mx-auto"
          >
            Available for research collaborations, academic talks, AI consulting, and faculty discussions.
          </motion.p>
        </div>

        {/* Main grid: Form + Quick Links */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 relative z-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-medium text-foreground mb-1">Send a message</h3>
              <p className="text-sm text-muted-foreground">I'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  maxLength={100}
                  aria-label="Your full name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-accent/50 focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  maxLength={254}
                  aria-label="Your email address"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-accent/50 focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your research, collaboration idea, or question..."
                  required
                  rows={4}
                  maxLength={5000}
                  aria-label="Your message"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-accent/50 focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors resize-none"
                />
                {form.message.length > 4500 && (
                  <p className="text-xs text-muted-foreground text-right mt-1">{form.message.length}/5000</p>
                )}
              </div>

              {status === 'error' && (
                <div className="flex flex-col gap-1 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-xs text-red-400 font-medium">Failed to send — please try again or:</p>
                  <a
                    href={`mailto:sreeharitm11@gmail.com?subject=${encodeURIComponent(`Portfolio Inquiry from ${form.name}`)}&body=${encodeURIComponent(`Hi Sreehari,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`)}`}
                    className="text-xs text-accent underline underline-offset-2"
                  >
                    Click to email directly →
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                aria-label="Send your message"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-accent/50 ${
                  status === 'sent'
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                }`}
              >
                {status === 'sent' ? (
                  '✓ Message sent!'
                ) : status === 'sending' ? (
                  <><span className="w-4 h-4 border-2 border-background/40 border-t-background rounded-full animate-spin" /> Sending…</>
                ) : status === 'error' ? (
                  'Try again'
                ) : (
                  <>Send Message <Send size={14} /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Quick Contact + Google Meet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* Google Meet CTA */}
            <div className="rounded-2xl border border-accent/25 bg-accent/8 p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/20">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">Schedule a Google Meet</p>
                  <p className="text-muted-foreground text-xs">30-min call · Research, collaborations, or teaching</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Want to discuss a collaboration, research idea, or have an academic question? Let's hop on a quick Google Meet call.
              </p>
              <button
                onClick={openCalendly}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-all cursor-pointer w-full"
              >
                Book a 30-min Meet <Calendar size={14} />
              </button>
            </div>

            {/* Direct Contact Links */}
            <div className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Direct Links</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Mail, label: 'Email', value: 'sreeharitm11@gmail.com', href: 'mailto:sreeharitm11@gmail.com' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'sreehari-t-m', href: 'https://www.linkedin.com/in/sreehari-t-m-5425951b0/' },
                  { icon: Github, label: 'GitHub', value: '@sreeharitm', href: 'https://github.com/sreeharitm' },
                ].map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-accent/30 hover:bg-secondary/40 transition-all group cursor-pointer"
                    >
                      <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">{link.label}</p>
                        <p className="text-sm text-foreground truncate">{link.value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Academic profiles grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border overflow-hidden relative z-10"
        >
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { label: 'ORCID Profile', value: '0009-0006-3707-0928', href: 'https://orcid.org/0009-0006-3707-0928' },
              { label: 'Scopus Author ID', value: '60141361300', href: 'https://www.scopus.com/authid/detail.uri?authorId=60141361300' },
              { label: 'Google Scholar', value: 'View publications & citations', href: 'https://scholar.google.com/citations?user=sreeharitm' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card p-6 flex items-center justify-between hover:bg-secondary/40 transition-colors cursor-pointer"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm text-foreground font-medium">{item.value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-border text-muted-foreground text-xs">
          <p>Based in Bangalore, India · Available globally for research</p>
          <p>© 2026 Sreehari T M · Built with curiosity and code</p>
        </div>
      </div>
    </section>
  );
}
