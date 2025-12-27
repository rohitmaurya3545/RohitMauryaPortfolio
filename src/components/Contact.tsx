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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xgvleblk", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert("Oops! Something went wrong ❌");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error! Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* LEFT */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700 ring-1 ring-blue-500/10 hover:ring-blue-500/30 transition">
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
                  <Phone className="text-cyan-400" size={20} />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-300">+91 9569XXXX68</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="text-indigo-400" size={20} />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <a
                      href="mailto:rohitmaurya3545@gmail.com"
                      className="text-indigo-400 hover:text-indigo-300 break-all"
                    >
                      rohitmaurya3545@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Linkedin className="text-sky-400" size={20} />
                  <div>
                    <div className="text-white font-medium">LinkedIn</div>
                    <a 
                      href="https://linkedin.com/in/rohit-kumar-maurya-525355248" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 break-all"
                    >
                      linkedin.com/in/rohit-kumar-maurya-525355248
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700 ring-1 ring-indigo-500/10 hover:ring-indigo-500/30 transition">
              <h3 className="text-xl font-bold text-white mb-4">Ready to work together?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're someone looking for 
                help with your project, I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="img/RohitKumarMauryass.pdf" 
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition"
                >
                  <Download size={16} />
                  Download Resume
                </a>
                <a 
                  href="https://linkedin.com/in/rohit-kumar-maurya-525355248" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-6 py-3 rounded-lg transition"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700 ring-1 ring-blue-500/10 hover:ring-blue-500/30 transition">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-emerald-500/20 text-emerald-400 p-4 rounded-lg mb-4">
                  ✓ Message sent successfully!
                </div>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-400 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-400 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-400 outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
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
