import BulletPoints from "@/app/_components/BulletPoints";
import ImageGrid from "@/app/_components/ImageGrid";
import VerticalActionButtons from "@/app/_components/VerticalActionButtons";
import React from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";

export const cSharpAppInfo: CollapseHeaderInfo = {
  timeFrame: "March 2022",
  title: "C# CRUD desktop app",
  tech: "C#, MySQL",
};

const cSharpAppBulletpoints: BulletPoint[] = [
  {
    text: "CRUD functionality",
  },
  {
    text: "Azure MySQL database",
  },
  {
    text: "Transactions, triggers and procedures to protect the database's integrity",
  },
];

const cSharpAppImages: GridImage[] = [
  {
    src: "/images/A3Application.png",
    alt: "The main page of the application, providing an overview of the document collection allowing to search, sort and filter and consult details for each publication",
    height: 799,
    width: 885,
  },
  {
    src: "/images/A3CommandeLivres.png",
    alt: "One of the tabs allows to order books and follow up on order and delivery status",
    height: 799,
    width: 885,
  },
  {
    src: "/images/A3AlerteAbonnements.png",
    alt: "When magazine subscriptions are about to expire a warning pops up on login",
    height: 800,
    width: 885,
  },
  {
    src: "/images/A3Suppression.png",
    alt: "When deleting a document from the database a check is made if any copies are present in the collection. If so a warning message is displayed and the suppression is aborted",
    height: 800,
    width: 886,
  },
  {
    src: "/images/A3Authentification.png",
    alt: "A screenshot of the authentification window",
    height: 137,
    width: 374,
  },
];

const actions: ActionButton[] = [
  {
    text: "Github project",
    href: "https://github.com/carlfremault/Mediatek86",
    logo: <RxGithubLogo size={20} className="me-2" />,
  },
  {
    text: "Project report (in french)",
    href: "/docs/A3CompteRendu.pdf",
    logo: <FaRegFilePdf size={20} className="me-2" />,
    internal: true,
  },
];

const CSharpApp = (): JSX.Element => {
  return (
    <>
      <p className="mb-10 indent-6 lg:mb-0">
        For the second workshop during my final year I added the requested
        functionalities to a C# desktop application.
      </p>
      <div className="grid grid-cols-1 lg:mb-10 lg:grid-cols-2 lg:gap-6">
        <BulletPoints
          bulletpoints={cSharpAppBulletpoints}
          className="flex flex-col  justify-center"
        />
        <VerticalActionButtons actions={actions} />
      </div>
      <ImageGrid images={cSharpAppImages} />
    </>
  );
};

export default CSharpApp;
