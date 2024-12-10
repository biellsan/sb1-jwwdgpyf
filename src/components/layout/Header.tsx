import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <a href="/" className="ml-4 text-2xl font-bold text-gray-900">
              Convertex
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>

          <div className="flex items-center">
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-black text-xs text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}