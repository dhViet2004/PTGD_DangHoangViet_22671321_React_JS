import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-0"> {/* Remove uneven padding */}
      <div className="w-full px-4 sm:px-6 lg:px-8"> {/* Full width with consistent padding */}
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {/* Column 1 - About Us */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="mb-6">
                Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
              </p>

              {/* Newsletter Subscription */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 flex-grow"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition duration-200">
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Logo at bottom of first column */}
            <div className="mt-auto">
              <img src="images/Logo.png" alt="Company Logo" className="h-12" />
            </div>
          </div>

          {/* Column 2 - Learn More and Shop */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Learn More</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500">Our Cooks</a></li>
                <li><a href="#" className="hover:text-orange-500">See Our Features</a></li>
                <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500">Gift Subscription</a></li>
                <li><a href="#" className="hover:text-orange-500">Christmas</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Recipes */}
          <div>
            <h3 className="font-bold text-xl mb-4">Recipes</h3>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500">Dinner</a></li>
                <li><a href="#" className="hover:text-orange-500">Healthy</a></li>
                <li><a href="#" className="hover:text-orange-500">Vegetarian</a></li>
                <li><a href="#" className="hover:text-orange-500">What to Cook This Week</a></li>
                <li><a href="#" className="hover:text-orange-500">Posts</a></li>
                <li><a href="#" className="hover:text-orange-500">Vegan</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal and Social */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2023 Charity Company. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <a href="#" className="text-sm hover:text-orange-500">Terms of Service</a>
            <a href="#" className="text-sm hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-orange-500">Send Us Feedback</a>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaPinterest size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;