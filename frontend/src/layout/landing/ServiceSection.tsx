import {Scissors} from 'lucide-react';
import Image from 'next/image';

export default function ServiceSection() {
  const cardServices = [
    {
      title: 'Classic Haircuts',
      price: 'P200',
      description: 'Traditional scissor cut with styling and finishing',
      duration: '45 min'
    },
    {
      title: 'Hot Towel Shave',
      price: 'P450',
      description: 'Luxurious straight razor shave with premium products',
      duration: '30 min'
    },
    {
      title: 'Beard Trim & Shape',
      price: 'P300',
      description: 'Precision beard sculpting and conditioning treatment',
      duration: '30 min'
    },
    {
      title: 'Full Service',
      price: 'P700',
      description: 'Complete grooming experience - cut, shave, and styling',
      duration: '90 min'
    }
  ];
  return (
    <section
      id="services"
      className="lg:px-40 sm:px-20 py-20 flex flex-col items-center px-8 text-white bg-secondary-landing"
    >
      <div className="flex items-center gap-4">
        <div className="h-1 w-20 bg-client rounded-sm"></div>
        <p className="text-client">
          <Scissors size={40} />
        </p>
        <div className="h-1 w-20 bg-client rounded-sm"></div>
      </div>
      <h1 className="text-5xl font-semibold mb-4 ">Our Services</h1>
      <h3 className="text-neutral-landing mb-12">
        Crafted with precision, delivered with excellence
      </h3>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-14 w-full">
        <div className="flex-col space-y-5">
          {cardServices.map((service, index) => (
            <div
              key={index}
              className="flex-col px-6 py-8 justify-between items-center bg-tertiary-landing border border-white/10 p-6 text-white shadow-lg rounded-lg hover:scale-105 transition duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl">{service.title}</h2>
                <p className="text-client font-semibold text-2xl">
                  {service.price}
                </p>
              </div>
              <p className="text-neutral-landing text-md mb-2">{service.description}</p>
              <p className="text-gray-400 text-sm">{service.duration}</p>
            </div>
          ))}
        </div>

        <Image
          src="/ServiceImage.jpg"
          alt="Service Image"
          width={700}
          height={900}
          className="object-cover w-full h-full rounded-md hover:scale-105 transition duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
