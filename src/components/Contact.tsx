import React, { useState } from 'react';
import { MapPin, Phone, Mail, Linkedin, Download, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-400 mt-1" size={20} />
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-gray-300">
                      Chandauli, Uttar Pradesh, India<br />
                      232102
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-400" size={20} />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-300">+91 9569XXXX68</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-400" size={20} />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <a href="mailto:rohitmaurya3545@gmail.com" className="text-blue-400 hover:text-blue-300">
                      rohitmaurya3545@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Linkedin className="text-blue-400" size={20} />
                  <div>
                    <div className="text-white font-medium">LinkedIn</div>
                    <a 
                      href="https://linkedin.com/in/rohit-kumar-maurya-525355248" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      linkedin.com/in/rohit-kumar-maurya-525355248
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Ready to work together?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're someone looking for 
                help with your project, I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="img/RohitKumarMauryas.pdf" 
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <Download size={16} />
                  Download Resume
                </a>
                <a 
                  href="https://linkedin.com/in/rohit-kumar-maurya-525355248" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-200"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-500/20 text-green-400 p-4 rounded-lg mb-4">
                  ✓ Message sent successfully!
                </div>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;