import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom
import { ShieldCheck, Phone, Mail } from 'lucide-react'; // Example icons

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8 text-gray-600 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About/Brand */}
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-3">TSB Bank</h3>
            <p>Committed to serving your financial needs with trust and innovation.</p>
            <Link to="/security" className="flex items-center mt-2 text-blue-600 hover:underline">
                <ShieldCheck className="mr-1 h-4 w-4" /> Security Information
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              <li><Link to="/help" className="hover:text-blue-600 hover:underline">Help & Support</Link></li>
              <li><Link to="/locations" className="hover:text-blue-600 hover:underline">Branch & ATM Locator</Link></li>
              <li><Link to="/careers" className="hover:text-blue-600 hover:underline">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
             <h3 className="text-md font-semibold text-gray-800 mb-3">Contact Us</h3>
             <address className="not-italic space-y-1.5">
                <p className="flex items-center"><Phone className="mr-2 h-4 w-4 text-blue-600" /> 1-800-TSB-BANK</p>
                <p className="flex items-center"><Mail className="mr-2 h-4 w-4 text-blue-600" /> <a href="mailto:support@tsbbank.example" className="hover:text-blue-600 hover:underline">support@tsbbank.example</a></p>
                {/* Add physical address if relevant */}
             </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <p>&copy; {currentYear} TSB Bank. All rights reserved. Member FDIC.</p>
          {/* Social media icons could go here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;