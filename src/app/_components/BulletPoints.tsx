import React from "react";

const BulletPoints = ({
  bulletpoints,
  className,
}: {
  bulletpoints: BulletPoint[];
  className?: string;
}) => {
  return (
    <ul className={`ms-6 list-outside list-disc space-y-6 ${className}`}>
      {bulletpoints.map(({ title, text }) => (
        <li key={title}>
          {title && (
            <span className="font-bold">
              {title}
              {": "}
            </span>
          )}
          {text}
        </li>
      ))}
    </ul>
  );
};

export default BulletPoints;
