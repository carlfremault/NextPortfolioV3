import BulletPoints from "@/app/_components/BulletPoints";
import BulletPointsWithTitle from "@/app/_components/BulletPointsWithTitle";
import ImageGrid from "@/app/_components/ImageGrid";

export const packYourBagInfo: CollapseHeaderInfo = {
  timeFrame: "from December 2025 until present",
  title: "Full-stack Developer",
  company: "PackYourBag! (Independent)",
  companyHref: "https://packyourbag.me",
};

const packYourBagTasksBP: BulletPoint[] = [
  {
    title: "Custom Auth",
    text: "Built credential-based auth from scratch. RS256 JWTs, refresh token family rotation with breach detection, HTTP-only session cookies managed by the BFF.",
  },
  {
    title: "Microservices Architecture",
    text: " Next.js BFF orchestrating three decoupled NestJS microservices via OpenAPI-generated typed clients.",
  },
  {
    title: "DX",
    text: "Turborepo monorepo with purpose-built shared packages and a React component library with Storybook.",
  },
  {
    title: "Deployment",
    text: "Self-hosted on a Hetzner VPS with automated CI/CD via Github Actions.",
  },
];

const packYourBagStackBP: BulletPointsWithTitle[] = [
  {
    title: "Frontend",
    bulletpoints: [
      "TypeScript",
      "React",
      "Next.js",
      "React Query",
      "TanStack Table",
      "Tailwind CSS",
      "Storybook",
    ],
  },
  {
    title: "Backend",
    bulletpoints: ["NestJS", "Vitest"],
  },
  {
    title: "Database",
    bulletpoints: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    bulletpoints: ["Github Actions", "Docker", "Turborepo"],
  },
];

const packYourBagImages: GridImage[] = [
  {
    src: "/images/pybDesktopSignIn.png",
    alt: "Desktop view of sign in page",
    width: 1920,
    height: 878,
  },
  {
    src: "/images/pybDesktopItems.png",
    alt: "Desktop view of the items management interface",
    width: 1920,
    height: 878,
  },
  {
    src: "/images/pybDesktopCollections.png",
    alt: "Desktop view of the collections interface",
    width: 1920,
    height: 878,
  },
  {
    src: "/images/pybDesktopTripDetails.png",
    alt: "Desktop view of the trip and packing management interface",
    width: 1920,
    height: 878,
  },
  {
    src: "/images/pybDesktopSettings.png",
    alt: "Desktop view of the user preferences panel",
    width: 1920,
    height: 878,
  },
];

const PackYourBag = () => {
  return (
    <>
      <p className="mb-6 indent-6">
        I decided to take a 6-month upskilling sabbatical dedicated to designing
        and building a production-grade full-stack application, independently
        driving architecture, infrastructure, and delivery end to end.
      </p>
      <BulletPoints bulletpoints={packYourBagTasksBP} className="mb-20" />
      <div className="mx-6 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {packYourBagStackBP.map((bp) => (
          <BulletPointsWithTitle
            key={bp.title}
            content={bp}
            className="mb-10 last:mb-20"
          />
        ))}
      </div>
      <ImageGrid images={packYourBagImages} />
    </>
  );
};
export default PackYourBag;
