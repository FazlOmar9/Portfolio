const logoUrls: [string, boolean][] = [
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', false],
  ['https://www.svgrepo.com/show/354272/redis.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', false],
  ['https://www.svgrepo.com/show/448299/aws.svg', true],
  ['https://www.svgrepo.com/show/448223/gcp.svg', false],
  ['https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/ollama.png', false],
  ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', false],
  ['https://www.svgrepo.com/show/306500/openai.svg', true],
  ['/pinecone-icon.svg', true],
];

const Carousel = () => {
  // Repeat enough times to ensure seamless animation
  const minLogos = 18;
  const repeatCount = Math.ceil(minLogos / logoUrls.length);
  const repeatedLogos = Array(repeatCount).fill(logoUrls).flat();

  // Double the array for seamless looping
  const logosForLoop = [...repeatedLogos, ...repeatedLogos];

  // Each logo is 2rem wide, gap-12 is 3rem (48px), so total per logo = 5rem
  const logoWidthRem = 2;
  const gapRem = 3;
  const totalPerLogo = logoWidthRem + gapRem;
  const containerWidth = `${logosForLoop.length * totalPerLogo}rem`;

  return (
    <div className='w-full overflow-hidden bg-[#0a0a1a] py-4 border-t border-b border-white/10'>
      <div className='relative w-full'>
        <div
          className='flex gap-12 animate-carousel'
          style={{
            width: containerWidth,
            animation: `carousel 30s linear infinite`,
          }}
        >
          {logosForLoop.map(([url, invert], i) => (
            <img
              key={i}
              src={url}
              alt='tech logo'
              className={`h-8 w-8 object-contain grayscale-[1] hover:grayscale-0 transition-opacity duration-300 opacity-80${invert ? ' invert' : ''}`}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <section
      id='home'
      className='h-screen flex flex-col items-center justify-center text-white relative'
    >
      <h1 className='text-6xl font-[800] mb-6 relative glow-text'>
        Muhammed Fazl Omar
      </h1>
      <p className='text-xl font-[800] text-white/80'>
        Web | AI Agents & Automation | Cloud | Machine Learning | Linux
      </p>
      {/* Carousel at the bottom */}
      <div className='absolute bottom-0 left-0 w-full'>
        <Carousel />
      </div>
    </section>
  );
};

export default Home;