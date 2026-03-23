import { motion } from 'motion/react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#2C3E50] to-[#34495E]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-6 text-white">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in collaboration, research discussions, or just want to say hello? 
            Feel free to reach out through any of these channels.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a
              href="mailto:sreeharitm11@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white text-[#2C3E50] px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-70">Email</div>
                <div>sreeharitm11@gmail.com</div>
              </div>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/sreeharitm"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-[#4A90A4] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Linkedin className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-70">LinkedIn</div>
                <div>Connect with me</div>
              </div>
            </motion.a>
            
            <motion.a
              href="https://github.com/sreeharitm"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white text-[#2C3E50] px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Github className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-70">GitHub</div>
                <div>View my code</div>
              </div>
            </motion.a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <motion.a
              href="https://orcid.org/0009-0006-3707-0928"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white hover:bg-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl">ORCID Profile</h3>
                <ExternalLink className="w-5 h-5" />
              </div>
              <p className="text-gray-300">0009-0006-3707-0928</p>
            </motion.a>

            <motion.a
              href="https://scholar.google.com/citations?user=SREEHARI_TM"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white hover:bg-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl">Google Scholar</h3>
                <ExternalLink className="w-5 h-5" />
              </div>
              <p className="text-gray-300">View publications & citations</p>
            </motion.a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-gray-400 text-sm">
            <p>Based in Bangalore, India</p>
            <p className="mt-2">© 2026 Sreehari T M. Built with curiosity and code.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
