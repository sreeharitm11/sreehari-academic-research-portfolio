import { motion } from 'motion/react';
import { FileText, Award } from 'lucide-react';

const publications = [
  {
    title: "Detection of Phishing Websites Using Machine Learning",
    authors: "Geetanjali Rave and Sreehari T M",
    venue: "IEEE CONECCT 2025",
    type: "published"
  },
  {
    title: "Predictive Model for 6-Month Prognosis of Stroke Patients Using Machine Learning",
    authors: "Geetanjali Rave and Sreehari T M",
    venue: "IEEE MIRE 2025",
    type: "published"
  },
  {
    title: "A Real-Time Application for Chronic Kidney Disease (CKD) Stage Prediction Using Machine Learning",
    authors: "Sreehari T M and Geetanjali Rave",
    venue: "Springer ICTCS 2025",
    type: "accepted"
  },
  {
    title: "Sustainable Optimization of Natural Fiber Composites for Aircraft Fuselage Using Machine Learning and MCDM",
    authors: "Geetanjali Rave and Sreehari T M",
    venue: "Journal of Natural Fibers (Q3)",
    type: "accepted"
  }
];

const patents = [
  {
    title: "Security Evaluation of IoT Networks: Hybrid Attack Analysis on LoRa Protocol",
    number: "202521035014 A",
    date: "May 2025"
  },
  {
    title: "Sustainable Machine-Learning-Based Demand Forecasting and Energy Optimization System",
    number: "202641009448 A",
    date: "Feb 2026"
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-12 text-[#2C3E50] text-center">Publications & Patents</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-[#4A90A4]" />
                <h3 className="text-2xl text-[#2C3E50]">Research Publications</h3>
              </div>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#F5F1E8] p-4 rounded-lg"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        pub.type === 'published' 
                          ? 'bg-[#4A90A4] text-white' 
                          : 'bg-[#2C3E50] text-white'
                      }`}>
                        {pub.type}
                      </span>
                    </div>
                    <h4 className="text-[#2C3E50] mb-1">{pub.title}</h4>
                    <p className="text-sm text-[#5D6D7E] mb-1">{pub.authors}</p>
                    <p className="text-sm text-[#4A90A4]">{pub.venue}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-[#4A90A4]" />
                <h3 className="text-2xl text-[#2C3E50]">Patents</h3>
              </div>
              <div className="space-y-4">
                {patents.map((patent, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#F5F1E8] p-4 rounded-lg"
                  >
                    <h4 className="text-[#2C3E50] mb-2">{patent.title}</h4>
                    <p className="text-sm text-[#5D6D7E] mb-1">Application No. {patent.number}</p>
                    <p className="text-sm text-[#4A90A4]">Published: {patent.date}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#4A90A4] to-[#2C3E50] p-6 rounded-lg text-white">
                <h4 className="text-xl mb-3">Professional Membership</h4>
                <p className="mb-2">International Association of Engineers (IAENG)</p>
                <p className="text-sm opacity-90">Member #544087 • Since Dec 2025</p>
                <p className="text-sm mt-3 opacity-90">
                  Active member in 10+ specialized societies including AI, Bioinformatics, Computer Science, and Data Mining
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
