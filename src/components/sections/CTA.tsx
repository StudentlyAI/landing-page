import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students already signed up to the StudentlyAI waitlist to achieve their academic goals.
            Get early access and exclusive benefits by joining our waitlist today.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="https://StudentlyAI.com">
              Join Waitlist Now
              <Sparkles className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
