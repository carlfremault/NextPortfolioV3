import React from "react";

const BulletPointsWithTitle = ({
  content: { title, bulletpoints },
  className,
}: {
  content: BulletPointsWithTitle;
  className?: string;
}) => {
  return (
    <div className={className}>
      <p className="mb-4 font-bold">{title}</p>
      <ul className="ms-6 list-outside list-disc space-y-6">
        {bulletpoints.map((bp) => (
          <li key={bp}>{bp}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPointsWithTitle;
