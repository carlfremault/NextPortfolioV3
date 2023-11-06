import React from "react";
import Image from "next/image";
import Collapse from "@/app/_components/Collapse";
import synergie from "./synergie";

const WorkPage = () => {
  return (
    <div className="space-y-12">
      <Collapse workExperience={synergie} isOpen />
    </div>
  );
};

export default WorkPage;
