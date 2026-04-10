import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/FrontImage.jpg"
        alt="Barber shop"
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover blur-xs brightness-90"
      />

      <div className="relative z-10 flex flex-col min-h-screen items-center justify-center text-white">
        <div className="flex flex-col items-center md:text-7xl sm:text-6xl ">
          <h1 className="font-bold mb-5 text-center sm:text-6xl text-5xl  ">
              Where Style 
          </h1>        
          <h1 className=" font-bold mb-5 text-center text-client sm:text-6xl text-5xl text-shadow-lg">
             Meets Precision 
          </h1>
        </div>


        <h4 className="text-center lg:w-200 w-full mb-6 sm:text-lg lg:px-10 md:px-12 sm:px-3 px-3 text-md  ">
            Experience the art of classic grooming with a modern twist, Premium cuts, hot towel, shaves, and gentleman's grooming services.
        </h4>

        <div className="flex">
            <Link href="/login" className="bg-client font-semibold shadow-md rounded-md px-4 py-2 mr-4 hover:scale-105 transition duration-300">Book Now</Link>
        </div>
      </div>
    </section>
  );
}
