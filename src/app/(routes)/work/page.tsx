import React from "react";
import Collapse from "@/app/_components/Collapse";
import Synergie from "./(content)/Synergie";
import { synergieInfo } from "./(content)/synergieContent";
import { faibrikInfo } from "./(content)/faibrikContent";
import Faibrik from "./(content)/Faibrik";

const WorkPage = () => {
  return (
    <div className="space-y-12">
      <Collapse headerInfo={synergieInfo}>
        <Synergie />
      </Collapse>
      <Collapse headerInfo={faibrikInfo}>
        <Faibrik />
      </Collapse>
    </div>
  );
};

export default WorkPage;
