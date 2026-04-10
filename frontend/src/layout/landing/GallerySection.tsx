'use client';

import {useState} from 'react';
import Image from 'next/image';

export default function GallerySection() {
  const categories = ['All', 'Interior', 'Products', 'Tools', 'Services'];

  const [activeCategory, setActiveCategory] = useState('All');

  const galleryCards = [
    {
      image: '/GalleryImage/InteriorGalleryImage.jpg',
      category: 'Interior',
      description: 'Classic  Ambiance'
    },
    {
      image: '/GalleryImage/Tools2GalleryImage.jpg',
      category: 'Tools',
      description: 'Professional Barber Tools'
    },
    {
      image: '/GalleryImage/ProductGalleryImage.jpg',
      category: 'Products',
      description: 'Premium Grooming Products'
    },
    {
      image: '/GalleryImage/ProductsGalleryImage.jpg',
      category: 'Products',
      description: 'Premium Grooming Products'
    },
    {
      image: '/GalleryImage/ToolsGalleryImage.jpg',
      category: 'Tools',
      description: 'Professional Barber Tools'
    },
    {
      image: '/GalleryImage/ServiceGalleryImage.jpg',
      category: 'Services',
      description: 'Expert Haircut in Progress'
    }
  ];

  const filteredGallery =
    activeCategory === 'All'
      ? galleryCards
      : galleryCards.filter(image => image.category === activeCategory);

  return (
    <div
      id="gallery"
      className="xl:px-44 lg:px-24 md:px-24 sm:px-12 px-8 py-20 flex flex-col items-center text-white bg-secondary-landing"
    >
      <p className="mb-2 text-5xl font-semibold text-center">Our Gallery</p>
      <p className="mb-8 text-neutral-landing text-center">
        A glimpse into our world of classic grooming and modern
      </p>

      <div className="flex w-full justify-center gap-4 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 border border-white/10  rounded-full transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category ? 'bg-client' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 w-full">
        {filteredGallery.map((card, index) => (
          <div
            key={index}
            className="group relative hover:scale-105  duration-300 rounded-md border border-white/10"
          >
            <Image
              src={card.image}
              alt={card.description}
              width={400}
              height={256}
              className="w-full h-64 object-cover rounded-lg"
            />
            <span className="absolute top-44 left-5 bg-client text-sm px-2 py-1 rounded-xl">
              {card.category}
            </span>
            <p className="absolute bottom-0 left-0 px-5 py-3 bg-black/70 w-full text-white rounded-md">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
