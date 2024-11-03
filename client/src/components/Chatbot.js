import React, { useState, useEffect, useRef } from 'react';
import customIcon from '../assets/skills icons/chatbot.png';
import closeIcon from '../assets/skills icons/close.png';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm here to help you navigate the site. May I know your first name?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [step, setStep] = useState(1);
    const chatWindowRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');

            setTimeout(() => {
                if (step === 1) {
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { text: `Nice to meet you, ${input}! What's your last name?`, sender: 'bot' }
                    ]);
                    setStep(2);
                } else if (step === 2) {
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { text: `Thanks! May I have your email address?`, sender: 'bot' }
                    ]);
                    setStep(3);
                } else if (step === 3) {
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { text: `Got it! What message would you like to send?`, sender: 'bot' }
                    ]);
                    setStep(4);
                } else if (step === 4) {
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { text: `Thank you for the info! You can also navigate through the site by typing "projects", "about", or "contact".`, sender: 'bot' }
                    ]);
                    setStep(5);
                } else {
                    handleBotResponse(input.toLowerCase());
                }
            }, 1000);
        }
    };

    const handleBotResponse = (message) => {
        switch (message) {
            case 'projects':
                document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
                setMessages(prevMessages => [...prevMessages, { text: 'Here are my projects!', sender: 'bot' }]);
                break;
            case 'about':
                document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
                setMessages(prevMessages => [...prevMessages, { text: 'Learn more about me!', sender: 'bot' }]);
                break;
            case 'contact':
                document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
                setMessages(prevMessages => [...prevMessages, { text: 'Feel free to reach out!', sender: 'bot' }]);
                break;
            default:
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "I'm not sure how to help with that. Try 'projects', 'about', or 'contact'.", sender: 'bot' }
                ]);
                break;
        }
    };

    // Scroll to the latest message whenever a new message is added
    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Chatbot Toggle Button with Custom Icon */}
            <button
                onClick={toggleChat}
                className="bg-white text-gray-800 rounded-full p-4 shadow-lg focus:outline-none hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105"
            >
                <img src={customIcon} alt="Chatbot" className="w-6 h-6" />
            </button>

            {/* Chatbox */}
            <div
                className={`transition-all duration-500 ease-in-out transform ${
                    isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-4'
                } w-[360px] h-[520px] bg-white rounded-xl shadow-lg p-4 mt-2 overflow-hidden fixed bottom-20 right-4`}
                style={{
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    transformOrigin: 'bottom right',
                    border: '1px solid #E0E0E0'
                }}
            >
                {/* Close Button */}
                <button onClick={toggleChat} className="absolute top-0 right-0 p-1">
                    <img src={closeIcon} alt="Close" className="w-4 h-4" />
                </button>

                <div ref={chatWindowRef} className="h-[420px] overflow-y-auto mb-2 rounded-lg p-2 bg-gray-100">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-2 p-3 rounded-lg ${
                                msg.sender === 'bot' ? 'bg-[#106EBE] text-white' : 'bg-gray-200 text-gray-900'
                            }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 border border-gray-300 rounded-lg p-2 bg-white text-gray-800 focus:outline-none focus:border-gray-400"
                    />
                    <button onClick={handleSend} className="bg-gray-300 text-gray-800 px-4 py-2 ml-2 rounded-lg hover:bg-gray-400">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
