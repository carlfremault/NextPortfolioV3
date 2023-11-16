import React from "react";
import BulletPoints from "@/app/_components/BulletPoints";
import ImageGrid from "@/app/_components/ImageGrid";
import { SDIBP, SDIImages } from "./SDIContent";

const SDI = () => {
  return (
    <div>
      <p className="mb-10 indent-6">
        After the first year of my studies, I had the opportunity to dive into
        the professional world of software development through an internship at
        Sport Data Intelligence. I actively contributed to the creation of the
        company&apos;s new showcase website, laying the foundation for my
        practical experience in JavaScript, React, Next.js, and Material-UI.
      </p>
      <BulletPoints bulletpoints={SDIBP} />
      <ImageGrid images={SDIImages} />
    </div>
  );
};

export default SDI;
