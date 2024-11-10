import { motion } from 'framer-motion';
import { Users, Star, Award, BookOpen } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Students',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Average Rating',
  },
  {
    icon: Award,
    value: '95%',
    label: 'Success Rate',
  },
  {
    icon: BookOpen,
    value: '50+',
    label: 'Subjects Covered',
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#333333] mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
            Join thousands of students who are already transforming their academic journey with StudentlyAI.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-[#FF8C00]" />
              </div>
              <div className="text-3xl font-bold text-[#333333] mb-2">{stat.value}</div>
              <div className="text-[#333333]/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}