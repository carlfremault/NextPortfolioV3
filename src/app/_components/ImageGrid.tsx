import React from "react";
import Image from "next/image";

const ImageGrid = ({ images }: { images: GridImage[] }) => {
  return (
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
  );
};

export default ImageGrid;
