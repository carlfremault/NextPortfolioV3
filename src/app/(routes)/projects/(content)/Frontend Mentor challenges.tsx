import VerticalActionButtons from "@/app/_components/VerticalActionButtons";
import Image from "next/image";
import { RxGithubLogo, RxLink2 } from "react-icons/rx";

export const frontendMentorInfo: CollapseHeaderInfo = {
  timeFrame: "August 2022",
  title: "Frontend Mentor Challenges",
  tech: "HTML, CSS",
};

const actionsOne: ActionButton[] = [
  {
    text: "Github project",
    href: "https://github.com/carlfremault/frontendmentor-productcard",
    logo: <RxGithubLogo size={20} className="me-2" />,
  },
  {
    text: "Product card component",
    href: "https://frontendmentor-productcard-pi.vercel.app",
    logo: <RxLink2 size={20} className="me-2" />,
  },
];

const actionsTwo: ActionButton[] = [
  {
    text: "Github project",
    href: "https://github.com/carlfremault/frontendmentor-qrcode",
    logo: <RxGithubLogo size={20} className="me-2" />,
  },
  {
    text: "QR code component",
    href: "https://frontendmentor-qrcode-five.vercel.app",
    logo: <RxLink2 size={20} className="me-2" />,
  },
];

const FrontendMentor = (): JSX.Element => {
  return (
    <>
      <p className="mb-10 indent-6">
        While looking for my first developer job, aside from working on some
        courses, I did a couple of the{" "}
        <a
          href="https://www.frontendmentor.io/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Frontend Mentor
        </a>{" "}
        challenges. As I got plenty of framework practice from the courses, and
        later my job, I decided to tackle these challenges, making pixel perfect
        renderings of the provided designs, using only HTML and CSS.
      </p>
      <div className="grid grid-cols-1 lg:mb-10 lg:grid-cols-2 lg:gap-6">
        <a
          href="https://react-playground-rosy-iota.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/images/productcard.jpg"
            alt="A screenshot of the product card"
            width={1896}
            height={893}
          />
        </a>
        <VerticalActionButtons actions={actionsOne} />
      </div>
      <div className="grid grid-cols-1 lg:mb-10 lg:grid-cols-2 lg:gap-6">
        <a
          href="https://react-playground-rosy-iota.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/images/qrcode.jpg"
            alt="A screenshot of the component"
            width={1896}
            height={893}
          />
        </a>
        <VerticalActionButtons actions={actionsTwo} />
      </div>
    </>
  );
};

export default FrontendMentor;
