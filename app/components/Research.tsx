import { motion } from 'motion/react';
import { Brain, Shield, TrendingUp } from 'lucide-react';

export function Research() {
  return (
    <section id="research" className="py-20 px-6 relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZyUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQyNjc1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Medical AI Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/95 to-[#4A90A4]/95"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-4 text-white text-center">Current Research Focus</h2>
          <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence and medical imaging to improve diagnostic accuracy and reliability
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl border-l-4 border-[#4A90A4]"
            >
              <Brain className="w-12 h-12 text-[#4A90A4] mb-4" />
              <h3 className="text-xl mb-3 text-[#2C3E50]">AI for Medical Imaging</h3>
              <p className="text-[#5D6D7E]">
                Developing deep learning models for automated knee MRI diagnosis, focusing on ACL tears, 
                meniscus injuries, and abnormality detection.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl border-l-4 border-[#4A90A4]"
            >
              <Shield className="w-12 h-12 text-[#4A90A4] mb-4" />
              <h3 className="text-xl mb-3 text-[#2C3E50]">Explainable Models</h3>
              <p className="text-[#5D6D7E]">
                Creating interpretable AI systems that clinicians can trust, using techniques like SHAP 
                and attention mechanisms to understand model decisions.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl border-l-4 border-[#4A90A4]"
            >
              <TrendingUp className="w-12 h-12 text-[#4A90A4] mb-4" />
              <h3 className="text-xl mb-3 text-[#2C3E50]">Model Reliability</h3>
              <p className="text-[#5D6D7E]">
                Improving model performance through advanced techniques like variational autoencoders, 
                ensemble methods, and robust evaluation strategies.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}