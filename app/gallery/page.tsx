"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  imageUrl: string;
  alt: string;
}

const GalleryPage: React.FC = () => {
  const data = {
    pageImage: {
      imageUrl: "/Aline/IMG_2472.JPEG",
      alt: "Page Image Description",
    },
    images: [
      { imageUrl: "/Aline/IMG_2469.JPEG", alt: "Gallery Image 1" },
      { imageUrl: "/Aline/IMG_2470.JPEG", alt: "Gallery Image 2" },
      { imageUrl: "/Aline/IMG_2471.JPEG", alt: "Gallery Image 3" },
      { imageUrl: "/Aline/IMG_2472.JPEG", alt: "Gallery Image 4" },
      { imageUrl: "/Aline/IMG_2473.JPEG", alt: "Gallery Image 5" },
      { imageUrl: "/Aline/IMG_2474.JPEG", alt: "Gallery Image 6" },
      { imageUrl: "/Aline/IMG_2475.JPEG", alt: "Gallery Image 7" },
      { imageUrl: "/Aline/IMG_2476.JPEG", alt: "Gallery Image 8" },
      { imageUrl: "/Aline/IMG_2477.JPEG", alt: "Gallery Image 9" },
      { imageUrl: "/Aline/IMG_2478.JPEG", alt: "Gallery Image 10" },
    ],
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white text-[#4b6043]">
      {/* Page Image */}
      <div className="relative w-full lg:w-3/4 h-[80vh] mx-auto mb-12 rounded-lg shadow-2xl overflow-hidden">
        <Image
          src={data.pageImage.imageUrl}
          alt={data.pageImage.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gallery Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-merriweather tracking-wide uppercase mb-6">
          Gallery
        </h1>
        <p className="text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
          Explore a selection of my gallery images. Click on any image to view
          in full screen.
        </p>
      </div>

      {/* Images Section (2-column layout with more height for gallery images) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 md:px-8">
        {data.images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[80vh] sm:h-[70vh] lg:h-[65vh] overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
            onClick={() => openModal(image.imageUrl)}
          >
            <Image
              src={image.imageUrl}
              alt={image.alt}
              fill
              className="object-cover group-hover:opacity-80 transition-opacity duration-300 rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full max-w-5xl max-h-full flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded Image"
              width={1200}
              height={800}
              className="object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
