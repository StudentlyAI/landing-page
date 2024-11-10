import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">StudentlyAI</span>
            </div>
            <p className="text-gray-600">Transform your academic journey with AI-powered learning assistance.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-primary">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-primary">How it Works</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-primary">Blog</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-primary">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-primary">Terms of Service</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">© {new Date().getFullYear()} StudentlyAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}