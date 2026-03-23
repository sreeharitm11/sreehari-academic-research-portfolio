import { motion } from 'motion/react';
import { Code2, Brain, Wrench, Award, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: "Programming & Development",
    skills: [
      "Python", "JavaScript/TypeScript", "Java", "C/C++",
      "React", "Node.js", "Flask", "FastAPI",
      "MongoDB", "MySQL", "REST APIs"
    ]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "PyTorch", "TensorFlow", "Keras",
      "Computer Vision (YOLO, CNNs)",
      "NLP & LLMs", "Scikit-learn",
      "SHAP & Explainability", "RAG Systems",
      "Hugging Face Transformers"
    ]
  },
  {
    icon: Wrench,
    title: "Cloud & DevOps",
    skills: [
      "AWS", "Azure", "GCP",
      "Docker", "Kubernetes",
      "Git/GitHub", "CI/CD",
      "Monitoring & Load Balancing",
      "System Reliability"
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    level: "Foundational",
    icon: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDE4OTY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Microsoft Identity and Access Administrator",
    issuer: "Microsoft",
    level: "Learning Badge",
    icon: "https://images.unsplash.com/photo-1693314184947-af516631ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc3NDIzNTI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Microsoft Security Operations Analyst",
    issuer: "Microsoft",
    level: "Learning Badge",
    icon: "https://images.unsplash.com/photo-1693314184947-af516631ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc3NDIzNTI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Microsoft Cybersecurity Architect",
    issuer: "Microsoft",
    level: "Learning Badge",
    icon: "https://images.unsplash.com/photo-1693314184947-af516631ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc3NDIzNTI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Microsoft Azure Security Technologies",
    issuer: "Microsoft",
    level: "Learning Badge",
    icon: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDE4OTY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Microsoft Azure Administrator",
    issuer: "Microsoft",
    level: "Learning Badge",
    icon: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDE4OTY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-[#F5F1E8] to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-12 text-[#2C3E50] text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#4A90A4] rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl text-[#2C3E50]">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#F5F1E8] text-[#2C3E50] rounded-md text-sm hover:bg-[#4A90A4] hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="w-10 h-10 text-[#4A90A4]" />
              <h3 className="text-3xl text-[#2C3E50]">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={cert.icon} 
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-[#4A90A4] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-[#2C3E50] mb-1 leading-tight">{cert.name}</h4>
                        <p className="text-sm text-[#5D6D7E]">{cert.issuer}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-[#F5F1E8] text-[#4A90A4] rounded-full text-xs">
                          {cert.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}