import React, { useState } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

const ModalCarousel = ({
  images,
  toggle,
  showModal,
  handleImageClick,
  indexShown,
}: {
  images: GridImage[];
  toggle: (e: any) => void;
  showModal: boolean;
  handleImageClick: (e: any) => void;
  indexShown: number;
}) => {
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
        className={`fixed inset-0 cursor-default bg-slate-800 ${
          showModal ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out`}
      >
        <RxCross1
          size={30}
          onClick={toggle}
          className="absolute right-5 top-5 cursor-pointer"
        />
      </div>
      <div className="absolute inset-8 flex items-center justify-center  md:inset-36">
        <div
          className={`aspect-w-16 aspect-h-9 h-full opacity-${
            showModal ? 100 : 0
          }  cursor-default transition-opacity duration-500 ease-in-out`}
          onClick={handleImageClick}
        >
          {images.map((image, index) => (
            <Image
              className={`absolute inset-0 h-full w-full cursor-pointer object-contain transition-opacity duration-700 ease-in-out ${
                index === indexShown ? "opacity-100" : "opacity-0"
              }`}
              key={image.src}
              src={image.src}
              alt={image.alt}
              height={image.height}
              width={image.width}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalCarousel;
