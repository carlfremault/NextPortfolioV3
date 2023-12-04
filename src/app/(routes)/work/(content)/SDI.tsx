import React from "react";
import BulletPoints from "@/app/_components/BulletPoints";
import ImageGrid from "@/app/_components/ImageGrid";

export const SDIInfo: CollapseHeaderInfo = {
  timeFrame: "from 24 May until 2 July 2021",
  title: "Frontend Developer Internship",
  company: "Sport Data Intelligence - Annecy, France",
};

const SDIBP: BulletPoint[] = [
  {
    title: "End-to-End Website Development",
    text: "Creating a new showcase website from conceptualization to implementation.",
  },
  {
    title: "Skill Consolidation and Professional Growth",
    text: "Leveraging theoretical insights gained from my coursework in a real-world context. Embracing the intricacies of working in a professional environment, collaborating within a team, navigating constraints, shouldering responsibilities, meeting deadlines, and exceeding expectations.",
  },
  {
    title: "Agile Development and Version Control",
    text: "Gaining hands-on experience in agile methodologies, participating in Daily Scrum Meetings, Storyboarding, and Kanban. Initiated into the art of Gitflow, enhancing my understanding of version control and collaborative coding practices.",
  },
];

const SDIImages: GridImage[] = [
  {
    src: "/images/SDI.jpg",
    alt: "Hero of the Sport Data Intelligence website frontpage",
    height: 742,
    width: 1284,
  },
  {
    src: "/images/SDIMarches.jpg",
    alt: "Bottom part of the Sport Data Intelligence website including footer",
    height: 1591,
    width: 1920,
  },
  {
    src: "/images/SDIContact.jpg",
    alt: "Contact page of the Sport Data Intelligence website including OpenStreetmaps plugin",
    height: 1807,
    width: 1920,
  },
  {
    src: "/images/SDIConnect.jpg",
    alt: "Login page to access the Sport Data Intelligence website backoffice",
    height: 1141,
    width: 1920,
  },
];

const SDI = () => {
  return (
    <div>
      <p className="mb-10 indent-6">
        After the first year of my studies, I had the opportunity to dive into
        the professional world of software development through an internship at
        Sport Data Intelligence. I actively contributed to the creation of the
        company&apos;s new showcase website, laying the foundation for my
        practical experience in JavaScript, React, Next.js, and Material-UI.
      </p>
      <BulletPoints bulletpoints={SDIBP} className="mb-20" />
      <ImageGrid images={SDIImages} />
    </div>
  );
};

export default SDI;
