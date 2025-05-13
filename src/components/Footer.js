import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const storedLikes = localStorage.getItem('portfolioLikes');
    if (storedLikes) setLikes(parseInt(storedLikes, 10));
  }, []);

  const handleLike = () => {
    const updated = likes + 1;
    setLikes(updated);
    localStorage.setItem('portfolioLikes', updated.toString());
  };

  return (
    <footer className="w-full text-center text-sm text-white/50 absolute bottom-4 left-0 px-4 flex items-center justify-center gap-4">
      <span>© {new Date().getFullYear()} Vishnu Nair. All rights reserved.</span>
      <button
        onClick={handleLike}
        className="flex items-center gap-1 text-xs text-white/60 hover:text-[#40ffaa] transition border border-white/20 px-2 py-1 rounded-full bg-white/5 hover:bg-white/10"
      >
        ❤️ {likes} Likes
      </button>
    </footer>
  );
};

export default Footer;
