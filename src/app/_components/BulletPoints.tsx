import React from "react";

const BulletPoints = ({
  bulletpoints,
  className,
}: {
  bulletpoints: BulletPoint[];
  className?: string;
}) => {
  return (
    <ul className={`mb-20 ms-6 list-outside list-disc space-y-6 ${className}`}>
      {bulletpoints.map((bp) => (
        <li key={bp.title}>
          <span className="font-bold">{bp.title}:</span> {bp.text}
        </li>
      ))}
    </ul>
  );
};

export default BulletPoints;
