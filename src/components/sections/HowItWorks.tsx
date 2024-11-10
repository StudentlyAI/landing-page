import { 
  UserPlus, 
  Sparkles, 
  Target,
  TrendingUp 
} from 'lucide-react';

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your account and tell us about your academic goals.',
    icon: UserPlus
  },
  {
    title: 'AI Analysis',
    description: 'Our AI analyzes your learning style and creates a personalized plan.',
    icon: Sparkles
  },
  {
    title: 'Set Goals',
    description: 'Define your academic targets and milestones.',
    icon: Target
  },
  {
    title: 'Track Progress',
    description: 'Monitor your improvement and adjust your strategy.',
    icon: TrendingUp
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How StudentlyAI Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with StudentlyAI in four simple steps and transform your learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 w-full h-0.5 bg-primary/20" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}