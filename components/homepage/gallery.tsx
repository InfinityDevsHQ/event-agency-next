import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="px-4 py-8 md:py-16 lg:py-28 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Image
          src="/assets/gallery/gallery-1.png"
          className="lg:min-h-[300px]"
          alt="gallery image"
          width={400}
          height={260}
        />
        <div className="flex gap-2">
          <Image
            src="/assets/gallery/gallery-2.png"
            className="lg:min-h-[300px]"
            alt="gallery image"
            width={400}
            height={260}
          />
          <Image
            src="/assets/gallery/gallery-3.png"
            className="lg:min-h-[300px]"
            alt="gallery image"
            width={400}
            height={260}
          />
        </div>
        <Image
          src="/assets/gallery/gallery-4.png"
          className="lg:min-h-[300px]"
          alt="gallery image"
          width={400}
          height={260}
        />
        <Image
          src="/assets/gallery/gallery-5.png"
          className="lg:min-h-[300px]"
          alt="gallery image"
          width={400}
          height={260}
        />
        <Image
          src="/assets/gallery/gallery-6.png"
          className="lg:min-h-[300px]"
          alt="gallery image"
          width={400}
          height={260}
        />
        <Image
          src="/assets/gallery/gallery-7.png"
          className="lg:min-h-[300px]"
          alt="gallery image"
          width={400}
          height={260}
        />
      </div>
    </div>
  );
};

export default Gallery;
