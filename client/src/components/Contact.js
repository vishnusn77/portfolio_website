import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatusMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Failed to send message. Please try again later.');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact-section"
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Let's Connect</h2>

      <div className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full">
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-black/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] text-sm"
                placeholder="First Name"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-black/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] text-sm"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] text-sm"
              placeholder="What's on your mind?"
              rows="4"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-3 py-1.5 text-sm bg-transparent text-[#40ffaa] border border-[#40ffaa] rounded-md hover:bg-[#40ffaa]/10 transition"
            >
              Send Message
            </button>
            {statusMessage && (
              <p className="text-sm mt-3 text-white/80">{statusMessage}</p>
            )}
          </div>
        </form>
      </div>
      <button
        onClick={scrollToTop}
        className="mt-10 px-6 py-2.5 text-sm text-white bg-white/10 border border-white/10 rounded-md backdrop-blur hover:bg-white/20 transition duration-200"
      >
        Return to Top
      </button>

    </section>
  );
};

export default Contact;
