import React from "react";
import Image from "next/image";

const UnsplashImage = ({
  className,
  src,
  height,
  width,
  alt,
  photographerHref,
  photographerName,
}: {
  className: string;
  src: string;
  height: number;
  width: number;
  alt: string;
  photographerHref: string;
  photographerName: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt=""
        className="h-full w-full object-cover"
        height={height}
        width={width}
      />
      <p className="absolute bottom-0 left-0 origin-top-left -rotate-90 text-sm text-white">
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
