import Marquee from 'react-fast-marquee';

const LogoMarquee = ({ skills }) => {
  return (
    <Marquee
      speed={40}
      gradient={false}
      pauseOnHover
      className="py-6"
    >
      {skills.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mx-3 text-sm text-gray-200 whitespace-nowrap shadow"
        >
          <img
            src={item.icon}
            alt={item.label}
            className="w-6 h-6 object-contain"
            loading="lazy"
          />
          <span>{item.label}</span>
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;
