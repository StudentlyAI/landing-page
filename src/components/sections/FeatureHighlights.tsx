import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, BookOpen, LineChart } from 'lucide-react';

const highlights = [
  {
    icon: Bot,
    title: '24/7 AI Tutors',
    description: 'Get instant help with any subject, anytime. Our AI never sleeps.',
  },
  {
    icon: BookOpen,
    title: 'Smart Study Materials',
    description: 'Access AI-generated study guides, flashcards, and practice questions.',
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Visual analytics to track your improvement and identify areas for growth.',
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#333333] mb-4">
            Why Choose StudentlyAI
          </h2>
          <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
            Discover the features that make StudentlyAI your perfect study companion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-[#FF8C00]/10 rounded-lg mb-4">
                      <highlight.icon className="h-8 w-8 text-[#FF8C00]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-[#333333]/80">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
