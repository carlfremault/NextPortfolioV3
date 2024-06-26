import Collapse from "@/app/_components/Collapse";
import React from "react";
import FrontendMentor, {
  frontendMentorInfo,
} from "./(content)/Frontend Mentor challenges";
import SymfonyWebApp, { symfonyWebAppInfo } from "./(content)/SymfonyWebApp";
import CSharpApp, { cSharpAppInfo } from "./(content)/CSharpApp";

const ProjectsPage = () => {
  return (
    <div className="space-y-12">
      <Collapse headerInfo={frontendMentorInfo}>
        <FrontendMentor />
      </Collapse>
      <Collapse headerInfo={cSharpAppInfo}>
        <CSharpApp />
      </Collapse>
      <Collapse headerInfo={symfonyWebAppInfo}>
        <SymfonyWebApp />
      </Collapse>
    </div>
  );
};

export default ProjectsPage;
