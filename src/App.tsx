import React from 'react';
import { Header } from './components/layout/Header';
import { ProductGrid } from './components/product/ProductGrid';

// Sample data - replace with your actual data source
const sampleProducts = [
  {
    id: '1',
    name: 'Basic Tee',
    price: 35,
    description: 'A comfortable cotton t-shirt',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Clothing'
  },
  {
    id: '2',
    name: 'Designer Watch',
    price: 149,
    description: 'Elegant timepiece for any occasion',
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  },
  {
    id: '3',
    name: 'Leather Bag',
    price: 199,
    description: 'Premium leather shoulder bag',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Bags'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Convertex
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Discover our latest collection of premium products
          </p>
        </div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <ProductGrid products={sampleProducts} />
        </section>
      </main>
      
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">About Us</h3>
              <p className="mt-4 text-base text-gray-500">
                Quality products for modern lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Customer Service</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;