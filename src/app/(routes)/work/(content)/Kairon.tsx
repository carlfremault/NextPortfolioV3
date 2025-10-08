import BulletPointsWithTitle from "@/app/_components/BulletPointsWithTitle";

export const kaironInfo: CollapseHeaderInfo = {
  timeFrame: "from July 2024 until October 2025",
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
      <p className="mb-6 indent-6">
        While employed at Kairon Labs, I primarily worked on three key projects:
      </p>
      <p className="mb-6 indent-6">
        First, I developed an internal interface that allowed the Legal team to
        verify crypto wallets using the Chainalysis API. Wallet addresses and
        assessments were stored in the company’s SQL database, and periodic
        verifications were automated using AWS EventBridge and Lambda functions.
      </p>
      <p className="mb-6 indent-6">
        Next, I built a dashboard that consolidated large volumes of data into a
        single, filterable table to support traders in their decision-making.
        The data was fetched and processed from multiple tables within the
        company’s SQL database.
      </p>
      <p className="mb-10 indent-6">
        Finally, I designed and implemented a new API from scratch to handle
        communication with various crypto exchanges, eliminating our dependency
        on the ccxt package. This API was built with Python and Flask and
        structured using an Abstract Base Class architecture.
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
