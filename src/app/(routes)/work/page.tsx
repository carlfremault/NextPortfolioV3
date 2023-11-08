import React from "react";
import Collapse from "@/app/_components/Collapse";
import Synergie from "./Synergie";
import { synergieInfo } from "./synergieContent";

const WorkPage = () => {
  return (
    <div className="space-y-12">
      <Collapse headerInfo={synergieInfo}>
        <Synergie />
      </Collapse>
      <Collapse headerInfo={synergieInfo}>
        <Synergie />
      </Collapse>
    </div>
  );
};

export default WorkPage;
