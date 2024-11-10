import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">StudentlyAI</span>
        </div>
        <Button asChild>
          <a href="https://StudentlyAI.com" className="bg-primary hover:bg-primary/90">
            Join Waitlist
          </a>
        </Button>
      </div>
    </header>
  );
}