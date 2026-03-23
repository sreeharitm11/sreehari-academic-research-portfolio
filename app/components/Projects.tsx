import { motion } from 'motion/react';
import { ExternalLink, Layers, Package, Heart, Music, Code, Shield } from 'lucide-react';

const projects = [
  {
    title: "Knee Injury Diagnosis from MRI",
    description: "Deep learning workflow for automated knee abnormality, ACL tear, and meniscus tear analysis from MRI volumes using PyTorch and MRNet.",
    tags: ["PyTorch", "Medical Imaging", "Deep Learning"],
    impact: "Enables automated diagnosis support for orthopedic clinicians",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZyUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQyNjc1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "REPACK360: Sustainable Packaging Platform",
    description: "Multi-tier platform for sustainable packaging selection with automated supplier negotiation and eco-scoring across seven environmental criteria.",
    tags: ["MERN Stack", "Sustainability", "REST APIs"],
    impact: "Real-time impact tracking for waste, carbon, water, and energy",
    icon: Package,
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDE4OTY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "CKD Stage Prediction System",
    description: "Real-time and explainable application for chronic kidney disease stage prediction using clinical data with SHAP-based interpretability.",
    tags: ["Python", "Machine Learning", "Flask", "SHAP"],
    impact: "Sub-0.5 second prediction latency for clinical decision support",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZyUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQyNjc1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "EMOTUNE: Emotion-Aware Music System",
    description: "Real-time emotion recognition using facial expressions on Raspberry Pi 4 with MobileNetV2 for mood-adaptive music playback.",
    tags: ["TensorFlow Lite", "Edge AI", "Computer Vision"],
    impact: "Low-latency on-device inference for personalized experiences",
    icon: Music,
    image: "https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDIzMTgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "CodeExam Pro: AI-Assisted Coding Platform",
    description: "Coding assessment platform with student and faculty dashboards, timed programming tests, and AI-assisted feedback using Docker sandbox.",
    tags: ["React", "TypeScript", "MongoDB", "Docker"],
    impact: "Streamlined coding assessments with automated evaluation",
    icon: Code,
    image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQxODE3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Phishing Website Detection",
    description: "Real-time phishing detection analyzing 31 lexical website features using Random Forest, achieving 96.8% accuracy.",
    tags: ["Python", "XGBoost", "Cybersecurity"],
    impact: "Protects users from malicious URLs in real-time",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1693314184947-af516631ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc3NDIzNTI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-4 text-[#2C3E50] text-center">Selected Projects</h2>
          <p className="text-center text-[#5D6D7E] mb-12 max-w-2xl mx-auto">
            A collection of research and development projects focused on solving real-world problems
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 to-transparent flex items-end p-6">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl text-[#2C3E50]">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-[#4A90A4] flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-[#5D6D7E] mb-4">{project.description}</p>
                    <p className="text-sm text-[#2C3E50] mb-3 italic">→ {project.impact}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#F5F1E8] text-[#4A90A4] rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}