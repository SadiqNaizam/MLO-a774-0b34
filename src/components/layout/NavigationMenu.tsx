import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Button } from '@/components/ui/button';
import { Home, Landmark, ArrowLeftRight, CreditCard, Settings, LogOut } from 'lucide-react'; // Example icons

// Define navigation items
const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Move Money', href: '/move-money', icon: ArrowLeftRight },
  { name: 'Card Controls', href: '/card-controls', icon: CreditCard },
  { name: 'Transactions', href: '/transactions', icon: Landmark },
  { name: 'Account Details', href: '/account-details', icon: Settings }, // Added based on JSON pages
];

const NavigationMenu: React.FC = () => {
  console.log("Rendering NavigationMenu");
  const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <Landmark className="mr-2 h-6 w-6" /> {/* Bank/Brand Icon */}
          TSB Bank
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center
                ${location.pathname === item.href
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
            >
              <item.icon className="mr-2 h-5 w-5" />
              {item.name}
            </Link>
          ))}
           <Button variant="ghost" size="icon" className="text-gray-300 hover:bg-gray-700 hover:text-white">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button - can be implemented with a Sheet or Dialog */}
          <Button variant="ghost" size="icon" className="text-gray-300 hover:bg-gray-700 hover:text-white">
            <Home className="h-6 w-6" /> {/* Placeholder, replace with Menu icon */}
            <span className="sr-only">Open Menu</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;