import BulletPoints from "@/app/_components/BulletPoints";
import ImageGrid from "@/app/_components/ImageGrid";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo, RxLink2 } from "react-icons/rx";
import { FaRegFilePdf } from "react-icons/fa6";
import VerticalActionButtons from "@/app/_components/VerticalActionButtons";

export const symfonyWebAppInfo: CollapseHeaderInfo = {
  timeFrame: "March 2022",
  title: "Symfony web app",
  tech: "PHP, Symfony, MySQL",
};

const symfonyWebAppBulletpoints: BulletPoint[] = [
  {
    text: "CRUD functionality",
  },
  {
    text: "SSO using Keycloak on an Azure server",
  },
  {
    text: "Cloud MySQL database",
  },
];

const SymfonyWebAppImages: GridImage[] = [
  {
    src: "/images/A1Bienvenue.png",
    alt: "Front page of the app, promoting the two last publications",
    height: 720,
    width: 1366,
  },
  {
    src: "/images/A1Details.png",
    alt: "Training video and information regarding duration, chapters and level",
    height: 720,
    width: 1366,
  },
  {
    src: "/images/A1Formations.png",
    alt: "An overview of the different training videos available, with level and date of publication. Users can search for title and sort on title and date. It is also possible to filter on level.",
    height: 720,
    width: 1366,
  },
  {
    src: "/images/A1Modif.png",
    alt: "Admin page allowing to publish and modify training videos entries",
    height: 720,
    width: 1366,
  },
  {
    src: "/images/A1Niveaux.png",
    alt: "Admin page allowing to add and remove levels. A warning message is visible. The user tried to remove a level is still in use for at least one training video",
    height: 720,
    width: 1366,
  },
];

const actions: ActionButton[] = [
  {
    text: "Github project",
    href: "https://github.com/carlfremault/mediatekformation",
    logo: <RxGithubLogo size={20} className="me-2" />,
  },
  {
    text: "Project report (in french)",
    href: "/docs/A1CompteRendu.pdf",
    logo: <FaRegFilePdf size={20} className="me-2" />,
    internal: true,
  },
];

const SymfonyWebApp = (): JSX.Element => {
  return (
    <>
      <p className="mb-10 indent-6 lg:mb-0">
        For the first of my second year workshops I made the requested changes
        and additions to a web application using PHP and Symfony.
      </p>
      <div className="grid grid-cols-1 lg:mb-10 lg:grid-cols-2 lg:gap-6">
        <BulletPoints
          bulletpoints={symfonyWebAppBulletpoints}
          className="flex flex-col  justify-center"
        />
        <VerticalActionButtons actions={actions} />
      </div>
      <ImageGrid images={SymfonyWebAppImages} />
    </>
  );
};

export default SymfonyWebApp;
