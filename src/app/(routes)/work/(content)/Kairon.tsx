import BulletPointsWithTitle from "@/app/_components/BulletPointsWithTitle";

export const kaironInfo: CollapseHeaderInfo = {
  timeFrame: "from July 2024 until November 2025",
  title: "Full-stack Developer",
  company: "Kairon Labs",
  companyHref: "https://www.kaironlabs.com",
};

const kaironBP: BulletPointsWithTitle[] = [
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
        tools and APIs to streamline operations.
      </p>
      <p className="mb-6 indent-6">
        I Developed an internal platform for the Legal team to verify crypto
        wallets using the Chainalysis API. Wallet data and assessment results
        were stored in the company&apo;s SQL database, with periodic
        re-verifications automated via AWS EventBridge and Lambda.
      </p>
      <p className="mb-6 indent-6">
        Then I built an end-of-day reporting dashboard that consolidated large
        datasets from multiple SQL tables into a single, filterable table. This
        tool enabled traders to efficiently analyze and act on key data points.
      </p>
      <p className="mb-10 indent-6">
        Finally, I designed and implemented a new API from the ground up to
        handle communication with multiple crypto exchanges, removing the
        dependency on the ccxt library. Built with Python and Flask, the system
        leveraged an Abstract Base Class architecture for scalability and
        maintainability.
      </p>
      <div>
        {kaironBP.map((bp) => (
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
