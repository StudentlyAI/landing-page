import { 
  Brain, 
  LineChart, 
  BookOpen, 
  Lightbulb 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    title: 'Personalized Learning',
    description: 'AI-driven study plans tailored to your unique learning style and goals.',
    icon: Brain
  },
  {
    title: 'Intelligent Assistance',
    description: '24/7 AI tutor support to help you understand complex topics.',
    icon: Lightbulb
  },
  {
    title: 'Comprehensive Tools',
    description: 'All-in-one platform for notes, flashcards, and study materials.',
    icon: BookOpen
  },
  {
    title: 'Performance Analytics',
    description: 'Track your progress and identify areas for improvement.',
    icon: LineChart
  }
];

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Better Learning</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how StudentlyAI transforms your study experience with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}