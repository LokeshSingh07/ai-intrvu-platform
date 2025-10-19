
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { emailAddress, platformName } from "@/data/constant";
import { Brain, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{platformName}</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionizing the hiring process with cutting-edge AI technology. 
              Build better teams, faster and more fairly.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>{emailAddress}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>India 🇮🇳</span>
              </div>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        {/* CTA Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring Process?</h3>
          <p className="text-gray-300 mb-6">Join thousands of companies already using AI to build better teams.</p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Start Your Free Trial Today
          </Button>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 <b>CWL.</b> All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
