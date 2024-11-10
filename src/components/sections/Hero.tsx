import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your Academic Journey
              </h1>
              <p className="text-xl text-gray-600">
                Your personalised AI study assistant that adapts to your learning style
                and helps you achieve academic excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://StudentlyAI.com">
                  Join Waitlist
                  <Sparkles className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
                <Brain className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  <strong>5,000+</strong> Students Joined
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  <strong>24/7</strong> AI Support
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                alt="Students using StudentlyAI"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
