"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

const ImageGrid = ({ images }: { images: GridImage[] }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (e: any) => {
    e.stopPropagation();
    setShowModal((prev) => !prev);
  };

  return (
    <div onClick={toggleModal}>
      <ImageModal images={images} toggle={toggleModal} showModal={showModal} />
      <div className="mb-20 columns-1 gap-2 md:columns-2">
        {images.map((image) => (
          <Image
            className="mb-2 w-full"
            key={image.src}
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
