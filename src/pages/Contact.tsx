import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll simulate a successful submission
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:inoue.sho95@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear about your project and discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">Send me a message</h2>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-green-300 font-semibold">Message sent successfully!</p>
                  <p className="text-green-400 text-sm">Your email client should open shortly. I'll get back to you soon.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-red-300 font-semibold">Something went wrong!</p>
                  <p className="text-red-400 text-sm">Please try again or contact me directly via email.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                    errors.subject ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1 text-red-400 text-sm">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Tell me about your project... (minimum 10 characters)"
                ></textarea>
                {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg">
              <p className="text-blue-300 text-sm">
                <strong>Note:</strong> This form will open your default email client with the message pre-filled. 
                You can also contact me directly at <a href="mailto:inoue.sho95@gmail.com" className="underline hover:text-blue-200">inoue.sho95@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:inoue.sho95@gmail.com" className="text-gray-300 hover:text-purple-300 transition-colors">
                      inoue.sho95@gmail.com
                    </a>
                    <p className="text-sm text-gray-400">I'll respond within 12 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-purple-300 transition-colors">
                      +81-1732-9794
                    </a>
                    <p className="text-sm text-gray-400">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">Shibuya, Japan</p>
                    <p className="text-sm text-gray-400">Available for remote work</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">Follow Me</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/bsky960920"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
                
                <a
                  href="https://twitter.com"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Twitter</span>
                </a>
                
                <a
                  href="mailto:inoue.sho95@gmail.com"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <Mail className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Email</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Let's Build Something Amazing</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you need a website, web application, or mobile app, I'm here to help bring your vision to life with modern technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;