'use client';
import {Star} from 'lucide-react';
import {useEffect, useState} from 'react';

const testimonials = [
  {
    name: 'David Thompson',
    role: 'Business Executive',
    rating: 5,
    text: '" Limang taon na akong bumabalik sa Sharp Cuts. Alam na agad ni Marcus kung anong style ang babagay sa akin. Iba talaga ang attention to detail at napaka-professional ng atmosphere dito. "',
    image: 'DT'
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    rating: 5,
    text: '" Pinakamagandang barbershop sa siyudad! Perpekto lagi ang fades ni Jake. Ang ganda ng kombinasyon ng modern vibe at classic na serbisyo—kaya dito na talaga ako palagi. "',
    image: 'MC'
  },
  {
    name: 'Robert Martinez',
    role: 'Restaurant Owner',
    rating: 5,
    text: '" Sobrang nag-level up ang beard ko dahil kay Rico. Kitang-kita ang husay at attention to detail niya sa beard grooming. Highly recommended para sa mga seryoso sa kanilang style. "',
    image: 'RM'
  },
  {
    name: 'James Wilson',
    role: 'Marketing Director',
    rating: 5,
    text: '" Legendary ang hot towel shave experience dito. Hindi lang ito simpleng gupit—kumpletong gentleman’s grooming experience talaga. Sulit na sulit bawat bayad. "',
    image: 'JW'
  },
  {
    name: 'Anthony Brown',
    role: 'Photographer',
    rating: 5,
    text: '" Marami na akong napuntahang barbershop, pero iba talaga ang Sharp Cuts. Consistent ang quality, maayos ang serbisyo, at sobrang professional. Dito na ako forever. "',
    image: 'AB'
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="testimonial"
      className="xl:px-44 lg:px-24 md:px-22 sm:px-20 px-8 py-20 flex flex-col items-center bg-primary-landing/90 text-center text-white"
    >
      <p className="md:text-5xl sm:text-4xl text-3xl font-semibold mb-4 ">
        What Our Clients Say
      </p>
      <p className="text-sm text-neutral-landing mb-8">
        Don't just take our word for it - hear from our satisfied clients
      </p>

      <div className=" bg-tertiary-landing px-12 py-12 border border-white/12 relative flex flex-col items-center rounded-xl hover:scale-105 transition duration-300">
        <div className="flex gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={50}
              className={`w-7 h-7 ${
                i < testimonials[currentIndex].rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-400'
              }`}
            />
          ))}
        </div>

        <p className="text-2xl mb-8">{testimonials[currentIndex].text}</p>

        <div className="flex items-center space-x-3 mb-1">
          <p className="px-4 py-3 bg-amber-600 rounded-full font-bold">
            {testimonials[currentIndex].image}
          </p>
          <p>{testimonials[currentIndex].name}</p>
        </div>

        <div className="flex justify-between space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 transition-all duration-300 rounded-full ${
                currentIndex === index ? 'w-10 bg-yellow-600 ' : 'bg-white'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
