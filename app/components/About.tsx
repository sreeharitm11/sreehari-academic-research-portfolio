import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-12 text-[#2C3E50] text-center">About Me</h2>
          
          <div className="space-y-6 text-[#5D6D7E] text-lg leading-relaxed">
            <p>
              I'm Sreehari T M, currently working as an Assistant Professor at Presidency University, Bangalore, 
              while pursuing my PhD research at BMS Institute of Technology and Management under VTU.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-[#F5F1E8] p-6 rounded-lg">
                <GraduationCap className="w-8 h-8 text-[#4A90A4] mb-4" />
                <h3 className="text-xl mb-2 text-[#2C3E50]">Research Focus</h3>
                <p className="text-sm">AI for Knee MRI Diagnosis, Deep Learning, Medical Imaging</p>
              </div>
              
              <div className="bg-[#F5F1E8] p-6 rounded-lg">
                <Briefcase className="w-8 h-8 text-[#4A90A4] mb-4" />
                <h3 className="text-xl mb-2 text-[#2C3E50]">Experience</h3>
                <p className="text-sm">Teaching, Industry (SRE), Corporate Training</p>
              </div>
              
              <div className="bg-[#F5F1E8] p-6 rounded-lg">
                <Heart className="w-8 h-8 text-[#4A90A4] mb-4" />
                <h3 className="text-xl mb-2 text-[#2C3E50]">Interests</h3>
                <p className="text-sm">Cloud Computing, ML, Cybersecurity, System Design</p>
              </div>
            </div>
            
            <p>
              My journey combines academic research with practical experience in both teaching and industry. 
              I'm passionate about exploring how AI can solve real-world problems, particularly in healthcare, 
              while also sharing knowledge through teaching and blogging.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}