import React from "react";
import Image from "next/image";

const ImageGrid = ({ images }: { images: GridImage[] }) => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {images.map((image) => (
        <Image
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
