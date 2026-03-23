import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#F5F1E8] to-[#E8E4D9]">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl mb-6 text-[#2C3E50]">
            Exploring AI, Research, and Real-World Systems
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#5D6D7E]">
            PhD Scholar (AI & Medical Imaging) | Developer | Learner
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-[#2C3E50] text-white rounded-lg hover:bg-[#34495E] transition-colors flex items-center gap-2 shadow-md"
            >
              View Work
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="px-8 py-3 bg-white text-[#2C3E50] rounded-lg hover:bg-gray-50 transition-colors border-2 border-[#2C3E50] shadow-md"
            >
              Read Blog
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#4A90A4] rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://presidencyuniversity.in/uploads/mentor/68c92feca5f6f1758015468.jpg"
              alt="Sreehari T M"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-8 border-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
