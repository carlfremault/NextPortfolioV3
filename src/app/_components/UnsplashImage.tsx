import React from "react";
import Image from "next/image";

const UnsplashImage = ({
  src,
  width,
  height,
  alt,
  photographerHref,
  photographerName,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  photographerHref: string;
  photographerName: string;
}) => {
  return (
    <div className="relative">
      <Image src={src} width={width} height={height} alt="" />
      <p className="absolute bottom-0 right-0 text-sm text-orange-300">
        Photo by{" "}
        <a className="underline" href={photographerHref}>
          {photographerName}
        </a>{" "}
        on{" "}
        <a
          className="underline"
          href="https://unsplash.com/photos/green-leafed-plant-with-pot-on-black-desk-AsRAyHIkOHk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default UnsplashImage;
