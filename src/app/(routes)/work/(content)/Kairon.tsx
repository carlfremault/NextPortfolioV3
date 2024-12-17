import BulletPointsWithTitle from "@/app/_components/BulletPointsWithTitle";

export const kaironInfo: CollapseHeaderInfo = {
  timeFrame: "from July until December 2024",
  title: "Full-stack Developer",
  company: "Kairon Labs",
  companyHref: "https://www.kaironlabs.com",
};

const kaironBP: BulletPointsWithTitle[] = [
  {
    title: "Frontend",
    bulletpoints: [
      "React",
      "NextJS",
      "TypeScript",
      "React-Query",
      "Tanstack Table",
      "Zustand",
    ],
  },
  {
    title: "FE Styling",
    bulletpoints: ["TailwindCSS"],
  },
  {
    title: "Forms",
    bulletpoints: ["React Hook Form"],
  },
  {
    title: "Routing",
    bulletpoints: ["Tanstack Location"],
  },
  {
    title: "Backend",
    bulletpoints: ["Python", "Flask"],
  },
  {
    title: "Database",
    bulletpoints: ["MariaDB"],
  },
];

const Kairon = (): JSX.Element => {
  return (
    <>
      <p className="mb-10 indent-6">
        While employed at Kairon Labs I worked on two projects: I developed an
        interface allowing the Legal team to verify Crypto wallets on the
        Chainalysis API. Addresses and assessments were stored in the
        company&apos;s SQL database. Periodical verifications were scheduled
        using AWS Eventbridge and Lambda functions.
      </p>
      <p className="mb-10 indent-6">
        Then I worked on a dashboard regrouping and consolidating high volumes
        of data in a table, enabling the traders to make their decisions.
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
