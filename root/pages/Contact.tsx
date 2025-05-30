import React from 'react';
import { Mail, MapPin, Phone, Clock, ExternalLink, Code2, LayoutGrid, Cloud } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-700 dark:to-primary-900 text-white py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in delay-100">
            Have a project in mind or want to discuss how we can work together? 
            I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-md text-primary-500 dark:text-primary-400 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400"
                    >
                      deliab93@icloud.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-md text-primary-500 dark:text-primary-400 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Based in the London, UK<br />
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-md text-primary-500 dark:text-primary-400 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a 
                      href="tel:+11234567890" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400"
                    >
                      +44(0)7375522219
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-md text-primary-500 dark:text-primary-400 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 5:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-up delay-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Looking for .NET Development Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden group">
              <div className="h-48 bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                <Code2 size={64} className="text-primary-500 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Umbraco Development</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Expert Umbraco CMS implementation, custom modules, and migrations between versions.
                </p>
                <a href="#" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:underline">
                  Learn More
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="h-48 bg-secondary-100 dark:bg-secondary-900 flex items-center justify-center">
                <LayoutGrid size={64} className="text-secondary-500 dark:text-secondary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Custom .NET Applications</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Tailored .NET applications built with C# to meet your specific business requirements.
                </p>
                <a href="#" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:underline">
                  Learn More
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="h-48 bg-accent-100 dark:bg-accent-900 flex items-center justify-center">
                <Cloud size={64} className="text-accent-500 dark:text-accent-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Azure Cloud Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Cloud infrastructure setup, optimization, and deployment of applications on Azure.
                </p>
                <a href="#" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:underline">
                  Learn More
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;