"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalCarousel from "./ModalCarousel";

const ImageGrid = ({ images }: { images: GridImage[] }) => {
  const [showModal, setShowModal] = useState(false);
  const [indexShown, setIndexShown] = useState(0);

  const toggleModal = (e: any) => {
    e.stopPropagation();
    setIndexShown(+e.target.dataset.index);
    setShowModal((prev) => !prev);
  };

  const handleImageClick = (e: any) => {
    e.stopPropagation();
    setIndexShown((prev) => (prev + 1) % images.length);
  };

  const handleKeyDown = (e: any) => {
    e.stopPropagation();
    if (e.key === "Escape") {
      setShowModal(false);
    }
    if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
      setIndexShown(
        (prev) => (e.key === "ArrowLeft" ? prev - 1 : prev + 1) % images.length,
      );
    }
  };

  return (
    <div
      onClick={toggleModal}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="cursor-pointer"
    >
      <ModalCarousel
        images={images}
        toggle={toggleModal}
        showModal={showModal}
        handleImageClick={handleImageClick}
        indexShown={indexShown}
      />
      <div className="mb-20 columns-1 gap-2 md:columns-2">
        {images.map((image, index) => (
          <Image
            className="mb-2 w-full"
            key={image.src}
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
