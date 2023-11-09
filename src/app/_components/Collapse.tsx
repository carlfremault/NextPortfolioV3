"use client";

import React, { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Collapse = ({
  headerInfo,
  children,
}: {
  headerInfo: CollapseHeaderInfo;
  children: JSX.Element;
}) => {
  const [open, setOpen] = useState(false);
  const [caretRotation, setCaretRotation] = useState(0);

  const { timeFrame, title, company, companyHref } = headerInfo;

  const toggle = () => {
    setCaretRotation((prevRotation) => prevRotation + 180);
    setOpen(!open);
  };

  return (
    <div className="border-b border-b-orange-300">
      <div
        className="mb-10 flex cursor-pointer items-center justify-between"
        onClick={toggle}
      >
        <RxCaretDown
          size={40}
          className={`ms-6 transform transition-transform duration-700 ease-in-out `}
          style={{ transform: `rotate(${caretRotation}deg)` }}
        />
        <div className="text-right">
          <p className="mb-2 text-sm italic">{timeFrame}</p>
          <h2 className="mb-1 font-serif text-xl">{title}</h2>
          <a
            href={companyHref}
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            {company}
          </a>
        </div>
      </div>
      <div
        className={`${
          open ? "max-h-[165rem] opacity-100" : "my-0 max-h-0 opacity-0"
        }  overflow-hidden transition-all duration-700 ease-in-out`}
      >
        <div className="pt-10">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
