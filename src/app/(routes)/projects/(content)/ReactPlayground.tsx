import VerticalActionButtons from "@/app/_components/VerticalActionButtons";
import Image from "next/image";
import { RxGithubLogo, RxLink2 } from "react-icons/rx";

export const reactPlaygroundInfo: CollapseHeaderInfo = {
  timeFrame: "July 2023",
  title: "Parallax landing page",
  tech: "React, CSS, Bootstrap",
};

const actions: ActionButton[] = [
  {
    text: "Github project",
    href: "https://github.com/carlfremault/react-playground",
    logo: <RxGithubLogo size={20} className="me-2" />,
  },
  {
    text: "Landing page",
    href: "https://react-playground-rosy-iota.vercel.app/",
    logo: <RxLink2 size={20} className="me-2" />,
  },
];

const ReactPlayground = (): JSX.Element => {
  return (
    <>
      <p className="mb-10 indent-6">
        I set up a dedicated React playground project for personal
        experimentation, allowing me to explore and test various concepts. For
        example, I designed a basic landing page using{" "}
        <a
          href="https://keithclark.co.uk/articles/pure-css-parallax-websites/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Keith Clark&apos;s Pure CSS Parallax
        </a>{" "}
        technique.
      </p>
      <div className="grid grid-cols-1 lg:mb-10 lg:grid-cols-2 lg:gap-6">
        <a
          href="https://react-playground-rosy-iota.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/images/parallax.jpg"
            alt="A screenshot of the landingpage hero"
            width={1896}
            height={893}
          />
        </a>
        <VerticalActionButtons actions={actions} />
      </div>
    </>
  );
};

export default ReactPlayground;
