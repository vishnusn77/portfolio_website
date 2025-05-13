import React, { useState, useEffect, useRef } from 'react';
import customIcon from '../assets/skills icons/chatbot.png';
import closeIcon from '../assets/skills icons/close.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm here to help you navigate the site. May I know your first name?",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(1);
  const chatRef = useRef(null);
  const chatWindowRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleButtonRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
      setInput('');

      setTimeout(() => {
        if (step === 1) {
          setMessages((prev) => [
            ...prev,
            { text: `Nice to meet you, ${input}! What's your last name?`, sender: 'bot' },
          ]);
          setStep(2);
        } else if (step === 2) {
          setMessages((prev) => [
            ...prev,
            { text: `Thanks! May I have your email address?`, sender: 'bot' },
          ]);
          setStep(3);
        } else if (step === 3) {
          setMessages((prev) => [
            ...prev,
            { text: `Got it! What message would you like to send?`, sender: 'bot' },
          ]);
          setStep(4);
        } else if (step === 4) {
          setMessages((prev) => [
            ...prev,
            {
              text:
                'Thank you for the info! You can also navigate through the site by typing "projects", "about", or "contact".',
              sender: 'bot',
            },
          ]);
          setStep(5);
        } else {
          handleBotResponse(input.toLowerCase());
        }
      }, 800);
    }
  };

  const handleBotResponse = (message) => {
    const responses = {
      projects: 'Here are my projects!',
      about: 'Learn more about me!',
      contact: 'Feel free to reach out!',
    };

    if (responses[message]) {
      document.getElementById(`${message}-section`)?.scrollIntoView({ behavior: 'smooth' });
      setMessages((prev) => [...prev, { text: responses[message], sender: 'bot' }]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm not sure how to help with that. Try 'projects', 'about', or 'contact'.",
          sender: 'bot',
        },
      ]);
    }
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (e) => {
        if (
        chatRef.current &&
        !chatRef.current.contains(e.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target)
        ) {
        setIsOpen(false);
        }
    };

    if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        ref={toggleButtonRef}
        onClick={toggleChat}
        className="backdrop-blur-sm bg-white/25 text-white rounded-full p-4 shadow-md hover:bg-white/30 transition-transform"
      >
        <img src={customIcon} alt="Chatbot" className="w-6 h-6" />
      </button>
      <div
        ref={chatRef}
        className={`transition-all duration-500 ease-in-out transform ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ transformOrigin: 'bottom right' }}
      >
        <div
          className="w-[360px] h-[520px] rounded-xl bg-[#1e293b] text-white border border-white/10 shadow-lg overflow-hidden fixed bottom-24 right-4"
          style={{ maxWidth: '90vw', maxHeight: '90vh' }}
        >
          <button
            onClick={toggleChat}
            className="absolute top-2 right-2 w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-bold flex items-center justify-center"
          >
            <img style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(6%) saturate(6179%) hue-rotate(160deg) brightness(101%) contrast(97%)' }} src={closeIcon} alt="Close" className="w-3 h-3" />
          </button>
          <div
            ref={chatWindowRef}
            className="h-[420px] overflow-y-auto mb-2 rounded-lg p-3 text-sm space-y-2"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg w-fit max-w-[85%] ${
                  msg.sender === 'bot'
                    ? 'bg-[#40ffaa]/10 border border-[#40ffaa]/20 text-[#40ffaa]'
                    : 'bg-white/10 text-white border border-white/10 ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center p-2 border-t border-white/10">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-black/20 border border-white/20 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#40ffaa] placeholder:text-white/60"
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 py-2 text-sm rounded-md bg-[#40ffaa] text-black font-semibold hover:bg-[#32e6a8] transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
