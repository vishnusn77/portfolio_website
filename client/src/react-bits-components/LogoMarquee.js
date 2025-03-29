import Marquee from 'react-fast-marquee';

const LogoMarquee = ({ skills }) => {

  const repeatedSkills = [...skills, ...skills, ...skills];
  return (
    <div className="relative w-full py-6 overflow-hidden">

      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover
          className="py-6"
        >
          {repeatedSkills.map((item, idx) => (
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
      </div>
  );
};

export default LogoMarquee;
