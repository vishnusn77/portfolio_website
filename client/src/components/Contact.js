import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Function to submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message
                })
            });
            //const data = await response.json();
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

    // Function to scroll to the top of the home page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="contact-section" className="min-h-screen flex flex-col items-center justify-center py-16 px-4 text-gray-900">
           <div 
                className="w-full max-w-lg rounded-lg shadow-lg p-8" 
                style={{
                    backgroundColor: '#106EBE', // Updated background color
                    opacity: 0.88, // Optional: Adjust opacity if needed for a lighter effect
                }}
            >
                <h2 className="text-white text-4xl font-bold text-center mb-2">Contact Me</h2>
                <br />

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-sm text-white text-left">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm text-white text-left">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-white text-left">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                            placeholder="example@example.com"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm text-white text-left">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                            placeholder="Your message"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
                        >
                            SUBMIT
                        </button>
                    </div>

                    {/* Status Message */}
                    {statusMessage && <p className="text-center text-sm mt-4">{statusMessage}</p>}
                </form>
            </div>

            {/* Go Back to Top Button */}
            <button 
                onClick={scrollToTop} 
                className="mt-8 px-8 py-4 bg-white text-[#106EBE] font-semibold rounded-full shadow-md hover:bg-gray-200 transition transform hover:scale-105"
            >
                Go back to top
            </button>
        </section>
    );
};

export default Contact;
