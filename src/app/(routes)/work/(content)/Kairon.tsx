import BulletPoints from "@/app/_components/BulletPoints";
import BulletPointsWithTitle from "@/app/_components/BulletPointsWithTitle";

export const kaironInfo: CollapseHeaderInfo = {
  timeFrame: "from July 2024 until November 2025",
  title: "Full-stack Developer",
  company: "Kairon Labs",
  companyHref: "https://www.kaironlabs.com",
};

const kaironTasksBP: BulletPoint[] = [
  {
    title: "Wallet Verification Interface",
    text: "Developed an interface for the Legal team to verify crypto wallets using the Chainalysis API. Wallet data and assessment results were stored in the company&apo;s SQL database, with periodic re-verifications automated via AWS EventBridge and Lambda functions.",
  },
  {
    title: "Trading Dashboard",
    text: " Built an end-of-day reporting dashboard that consolidated large datasets from multiple SQL tables into a single, filterable table. This tool enabled traders to efficiently analyze and act on key data points.",
  },
  {
    title: "Exchange Integration API",
    text: "Designed and implemented a new API from the ground up to handle communication with multiple crypto exchanges, removing the dependency on the ccxt library. Built with Python and Flask, the system leveraged an Abstract Base Class architecture for scalability and maintainability.",
  },
];

const kaironStackBP: BulletPointsWithTitle[] = [
  {
    title: "Frontend",
    bulletpoints: [
      "React",
      "Next.js",
      "TypeScript",
      "React Query",
      "TanStack Table",
      "Zustand",
      "React Hook Form",
      "Tailwind CSS",
      "TanStack Router",
    ],
  },
  {
    title: "Backend",
    bulletpoints: ["Python", "Flask", "AWS Lambda", "AWS EventBridge"],
  },
  {
    title: "Database",
    bulletpoints: ["MariaDB"],
  },
];

const Kairon = (): JSX.Element => {
  return (
    <>
      <p className="mb-6 indent-6">
        During my time at Kairon Labs, I focused on building robust internal
        tools and APIs to streamline operations on the company&apos;s
        proprietary crypto trading application.
      </p>
      <BulletPoints bulletpoints={kaironTasksBP} className="mb-20" />
      <div className="mx-6 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {kaironStackBP.map((bp) => (
          <BulletPointsWithTitle
            key={bp.title}
            content={bp}
            className="mb-10 last:mb-20"
          />
        ))}
      </div>
    </>
  );
};

export default Kairon;
