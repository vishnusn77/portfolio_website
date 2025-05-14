import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [likes, setLikes] = useState(0);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    fetch('/.netlify/functions/likeCounter')
      .then(res => res.json())
      .then(data => {
        if (data.count !== undefined) setLikes(data.count);
      })
      .catch(console.error);
  }, []);

  const handleLike = async () => {
    if (isLiking) return;
    setIsLiking(true);
    try {
      const res = await fetch('/.netlify/functions/likeCounter', { method: 'POST' });
      const data = await res.json();
      if (data.count !== undefined) setLikes(data.count);
    } catch (err) {
      console.error('Like failed:', err);
    }
    setIsLiking(false);
  };

  return (
    <footer className="w-full text-center text-sm text-white/50 absolute bottom-4 left-0 px-4 flex items-center justify-center gap-4">
      <span>© {new Date().getFullYear()} Vishnu Nair. All rights reserved.</span>
      <button
        onClick={handleLike}
        disabled={isLiking}
        className="flex items-center gap-1 text-xs text-white/60 hover:text-[#40ffaa] transition border border-white/20 px-2 py-1 rounded-full bg-white/5 hover:bg-white/10"
      >
        ❤️ {likes} Likes
      </button>
    </footer>
  );
};

export default Footer;
