import Collapse from "@/app/_components/Collapse";
import React from "react";
import ReactPlayground, {
  reactPlaygroundInfo,
} from "./(content)/ReactPlayground";
import FrontendMentor, {
  frontendMentorInfo,
} from "./(content)/Frontend Mentor challenges";
import SymfonyWebApp, { symfonyWebAppInfo } from "./(content)/SymfonyWebApp";
import CSharpApp, { cSharpAppInfo } from "./(content)/CSharpApp";

const ProjectsPage = () => {
  return (
    <div className="space-y-12">
      <Collapse headerInfo={reactPlaygroundInfo}>
        <ReactPlayground />
      </Collapse>
      <Collapse headerInfo={frontendMentorInfo}>
        <FrontendMentor />
      </Collapse>
      <Collapse headerInfo={symfonyWebAppInfo}>
        <SymfonyWebApp />
      </Collapse>
      <Collapse headerInfo={cSharpAppInfo}>
        <CSharpApp />
      </Collapse>
    </div>
  );
};

export default ProjectsPage;
