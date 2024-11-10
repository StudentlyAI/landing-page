import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#FF8C00]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students already on the waitlist for the next generation of AI-powered learning.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-[#FF8C00] hover:bg-white/90"
            asChild
          >
            <a
              href="https://StudentlyAI.com"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Waitlist <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}