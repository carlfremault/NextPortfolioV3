import React, { useState } from "react";
import Image from "next/image";

const ImageModal = ({
  images,
  toggle,
  showModal,
}: {
  images: GridImage[];
  toggle: (e: any) => void;
  showModal: boolean;
}) => {
  const [indexShown, setIndexShown] = useState(0);
  const handleImageClick = (e: any) => {
    e.stopPropagation();
    setIndexShown((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-10 ${
        showModal
          ? "max-h-full opacity-100"
          : "pointer-events-none max-h-0 opacity-0"
      } transition-opacity duration-500 ease-in-out`}
      onClick={toggle}
    >
      <div
        className={`fixed inset-0 bg-slate-800 ${
          showModal ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out`}
      ></div>
      <div className="absolute inset-8 flex items-center justify-center overflow-hidden  md:inset-36">
        <div
          className="aspect-w-16 aspect-h-9 h-full"
          onClick={handleImageClick}
        >
          <Image
            className="h-full w-full object-contain"
            key={images[indexShown].src}
            src={images[indexShown].src}
            alt={images[indexShown].alt}
            height={images[indexShown].height}
            width={images[indexShown].width}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
