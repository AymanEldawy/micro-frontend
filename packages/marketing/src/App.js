// components/FeaturedProducts.tsx

import React from "react";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "Premium noise-cancelling headphones with 30-hour battery life and crystal clear sound.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Smart Watch Pro",
    description: "Track your fitness, receive notifications, and stay connected with style.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Minimalist Backpack",
    description: "Water-resistant, laptop compartment, perfect for daily commute or travel.",
    image: "https://images.unsplash.com/photo-1553065360-4a06a25d71f8?w=600&h=600&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    description: "RGB backlit, cherry MX switches, built for gaming and fast typing.",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop",
    link: "#",
  },
];

export default function App() {
  console.log(React);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products 
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium products designed for modern living.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Call to Action */}
                <a
                  href={product.link}
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  View Product
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
