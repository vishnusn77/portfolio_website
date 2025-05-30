import Marquee from 'react-fast-marquee';

const LogoMarquee = ({ skills }) => {

  const repeatedSkills = [...skills, ...skills, ...skills];
  return (
    <div className="relative w-full py-6 overflow-hidden">

      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[35%] w-12 bg-gradient-to-r from-[#00000e] to-transparent z-10 pointer-events-none" />
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[32%] w-12 bg-gradient-to-l from-[#00000e] to-transparent z-10 pointer-events-none" />
        <Marquee
          speed={40}
          gradient={false}
          className="py-6"
        >
          {repeatedSkills.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mx-2 text-sm text-gray-200 whitespace-nowrap shadow transition-transform duration-300 hover:scale-105"
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
      </div>
  );
};

export default LogoMarquee;
