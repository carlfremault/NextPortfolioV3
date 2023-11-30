import Link from "next/link";
import React from "react";

const VerticalActionButtons = ({
  actions,
}: {
  actions: ActionButton[];
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center space-y-6  p-16 lg:justify-start">
      {actions.map(({ text, href, logo, internal }) => {
        if (internal)
          return (
            <Link
              href={href}
              key={text}
              target="_blank"
              rel="noreferrer"
              className="flex w-72 items-center justify-center rounded border border-orange-300 px-4 py-2"
            >
              {" "}
              {logo}
              <span>{text}</span>
            </Link>
          );

        return (
          <a
            href={href}
            key={text}
            target="_blank"
            rel="noreferrer"
            className="flex w-72 items-center justify-center rounded border border-orange-300 px-4 py-2"
          >
            {logo}
            <span>{text}</span>
          </a>
        );
      })}
    </div>
  );
};

export default VerticalActionButtons;
