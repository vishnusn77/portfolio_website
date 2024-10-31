import React from 'react';

const Contact = () => {
    // Function to scroll to the top of the home page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="contact-section" className="min-h-screen flex flex-col items-center justify-center py-16 px-4 text-gray-900">
            <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
                <h2 className="text-4xl font-bold text-center mb-2">Contact Me</h2>
                <br />
                
                <form className="space-y-4">
                    {/* Full Name */}
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-sm text-gray-600 text-left">First Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm text-gray-600 text-left">Last Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-600 text-left">E-mail</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                            placeholder="example@example.com"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm text-gray-600 text-left">Message</label>
                        <textarea
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                            placeholder="Your message"
                            rows="4"
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
