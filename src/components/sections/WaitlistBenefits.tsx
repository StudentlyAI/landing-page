import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  'Early access to all premium features',
  'Lifetime discount on subscription',
  'Priority support and feature requests',
  'Exclusive learning resources',
  'Free consultation with our education experts',
  'Special community events access',
];

export default function WaitlistBenefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#333333] mb-4">
            Join Our Waitlist Today
          </h2>
          <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
            Be among the first to experience the future of learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-[#FF8C00]" />
              </div>
              <span className="text-[#333333]">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}