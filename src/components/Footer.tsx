import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-12 bg-gray-50">
      <div className="flex items-center space-x-2 mb-4">
        <GraduationCap className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold">StudentlyAI</span>
      </div>
      <p className="text-gray-600 mb-8">Transform your academic journey with AI-powered learning assistance</p>
      
      <div className="pt-8 border-t border-gray-200 w-full">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} StudentlyAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
