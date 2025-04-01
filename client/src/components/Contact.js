import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
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
                    message: formData.message
                })
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
        <section id="contact-section" className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Let's Connect</h2>

            <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-sm mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full bg-black/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] transition"
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
                                className="w-full bg-black/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] transition"
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
                            className="w-full bg-black/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] transition"
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
                            className="w-full bg-black/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] transition"
                            placeholder="What's on your mind?"
                            rows="5"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#40ffaa] hover:bg-[#2fffb2] text-black font-semibold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg"
                        >
                            Send Message
                        </button>
                        {statusMessage && (
                            <p className="text-sm mt-4 text-white/80">{statusMessage}</p>
                        )}
                    </div>
                </form>
            </div>

            <button 
                onClick={scrollToTop} 
                className="mt-12 px-6 py-3 bg-white text-[#106EBE] font-semibold rounded-full shadow-md hover:bg-gray-200 transition transform hover:scale-105"
            >
                Back to Top
            </button>
        </section>
    );
};

export default Contact;
