import { motion } from 'motion/react';
import { BookOpen, Tag } from 'lucide-react';

const blogPosts = [
  {
    title: "Understanding Variational Autoencoders for Anomaly Detection",
    preview: "Exploring how VAEs can be used to detect fraudulent transactions in highly imbalanced datasets, with practical implementation insights.",
    tags: ["Machine Learning", "Deep Learning", "Fraud Detection"],
    date: "March 2026"
  },
  {
    title: "Building Explainable AI Models for Healthcare",
    preview: "Why interpretability matters in medical AI and how SHAP values can help clinicians trust machine learning predictions.",
    tags: ["AI", "Healthcare", "Explainability"],
    date: "February 2026"
  },
  {
    title: "Site Reliability Engineering: Lessons from Production",
    preview: "Key takeaways from managing large-scale systems, monitoring strategies, and maintaining 99.9% uptime in real-world applications.",
    tags: ["SRE", "Cloud", "DevOps"],
    date: "January 2026"
  },
  {
    title: "LoRa Protocol Security: Hybrid Attack Analysis",
    preview: "Investigating security vulnerabilities in IoT networks using LoRa protocol and proposing defensive strategies for edge devices.",
    tags: ["Cybersecurity", "IoT", "Research"],
    date: "December 2025"
  },
  {
    title: "From Edge to Cloud: Deploying ML Models Efficiently",
    preview: "Practical guide to deploying TensorFlow Lite models on edge devices like Raspberry Pi while maintaining low latency.",
    tags: ["Edge AI", "Deployment", "Optimization"],
    date: "November 2025"
  },
  {
    title: "Data Engineering for Medical Imaging Datasets",
    preview: "Handling large MRI volumes, preprocessing pipelines, and building efficient data loaders for deep learning research.",
    tags: ["Data Engineering", "Medical Imaging", "PyTorch"],
    date: "October 2025"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-br from-white to-[#F5F1E8]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-[#4A90A4]" />
            <h2 className="text-4xl text-[#2C3E50]">Things I'm Learning & Sharing</h2>
          </div>
          <p className="text-center text-[#5D6D7E] mb-12 max-w-2xl mx-auto">
            Documenting my journey through AI/ML, cloud systems, cybersecurity, and everything in between
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-2 text-sm text-[#4A90A4] mb-3">
                  <Tag className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl mb-3 text-[#2C3E50]">{post.title}</h3>
                <p className="text-[#5D6D7E] mb-4 line-clamp-3">{post.preview}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#F5F1E8] text-[#2C3E50] rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
