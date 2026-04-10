import Image from 'next/image';

const cardAbout = [
  {h1: '15+', p: 'Years of Experience'},
  {h1: '5K+', p: 'Happy Clients'},
  {h1: '5', p: 'Expert Barbers'},
  {h1: '100%', p: 'Satisfaction'}
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="lg:px-44 md:px-24 sm:px-20 px-8 py-20 bg-primary-landing/90 grid xl:grid-cols-2 lg:grid-cols-1 gap-15 w-full text-white"
    >
      <div className="my-auto">
        <Image
          src="/AboutImage.jpg"
          alt="About Image"
          width={500}
          height={600}
          className="object-cover h-full rounded-xl hover:scale-105 transition duration-300"
        />
      </div>

      <div className="flex flex-col space-y-6">
        <p className="text-client">ABOUT US</p>

        <p className="text-4xl">Crafting Confidence Through Classic Grooming</p>

        <p className="text-neutral-landing">
          Since 2009, Sharp Cuts has been the cornestone of gentleman's grooming
          in the city. Our master barbers combine time-honord techniques with
          contemporary styles to deliver an unparalleled experience.
        </p>

        <p className="text-neutral-landing">
          We believe every man deserves to look and feel his best. That's why we
          use only premium products and tools, ensuring each cut isa masterpiece
          and every shave is an indulgece.
        </p>

        <div className="grid grid-cols-2 gap-7">
          {cardAbout.map((about, index) => (
            <div
              key={index}
              className="flex flex-col bg-tertiary border border-white/10 p-6 space-y-2 rounded-md hover:scale-105 transition duration-300"
            >
              <p className="text-client text-2xl">{about.h1}</p>
              <p className="text-xs">{about.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
