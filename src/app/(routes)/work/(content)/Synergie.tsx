import BulletPoints from "@/app/_components/BulletPoints";
import BulletPointsWithTitle from "@/app/_components/BulletPointsWithTitle";
import ImageGrid from "@/app/_components/ImageGrid";

export const synergieInfo: CollapseHeaderInfo = {
  timeFrame: "from October 2022 until June 2024",
  title: "Frontend Developer React",
  company: "Synergie Belgium",
  companyHref: "https://www.synergiejobs.be",
};

const synergieTasksBP: BulletPoint[] = [
  {
    title: "Frontend Development",
    text: "Built and maintained landing pages, user account pages, intranet homepage, blog pages, and interactive widgets using React and Next.js. Ensured responsiveness, accessibility, GA tracking, and smooth user interactions.",
  },
  {
    title: "Forms & User Accounts",
    text: " Implemented registration flows, account creation/login, favorites, saved searches, and applications. Managed forms with React, Formik, and backend validation (Node.js, Zod, Yup, Joi).",
  },
  {
    title: "Styling & UI",
    text: "Applied CSS, Sass, Bootstrap/Reactstrap, animations, and parallax effects to enhance UX.",
  },
  {
    title: "Backend & APIs",
    text: "Developed and modified Node.js routes, scheduled scripts/cron jobs, and integrated external APIs (Topdesk, Firebase).",
  },
  {
    title: "Databases",
    text: "Worked with SQL, Sequelize, MongoDB, and Firebase to store, retrieve, and manage application data.",
  },
  {
    title: "SEO & Internationalization",
    text: "Monitored Google Search Console, optimized page metadata, structured data, and implemented I18n for multi-language support.",
  },
  {
    title: "Monitoring & Error Handling",
    text: "Logged and tracked errors using Sentry and followed up on issues.",
  },
];

const synergieStackBP: BulletPointsWithTitle[] = [
  {
    title: "Frontend",
    bulletpoints: [
      "React",
      "Next.js",
      "TypeScript",
      "Formik",
      "CSS/Sass",
      "Bootstrap/Reactstrap",
    ],
  },
  {
    title: "Backend & APIs",
    bulletpoints: ["Node.js", "Express.js", "Topdesk", "Sendgrid"],
  },
  {
    title: "Database",
    bulletpoints: ["SQL/Sequelize", "MongoDB", "Firebase"],
  },
  {
    title: "Other",
    bulletpoints: ["Git, Gitlab", "Jenkins", "Sentry", "Postman"],
  },
];

const synergieImages: GridImage[] = [
  {
    src: "/images/SynergieOurJobIsYourJob.jpg",
    alt: "The Synergie website front page",
    height: 994,
    width: 1607,
  },
  {
    src: "/images/SynergieApplySpontaneously.jpg",
    alt: "A form to fill out for users wanting to apply for a job spontaneously",
    height: 994,
    width: 1607,
  },
  {
    src: "/images/SynergieOurOffices.jpg",
    alt: "The 'offices' page where users can view and search offices all accross Belgium",
    height: 994,
    width: 1607,
  },
  {
    src: "/images/SynergieFlexiJobs.jpg",
    alt: "The FlexiJobs landing page",
    height: 994,
    width: 1607,
  },
];

const Synergie = () => {
  return (
    <>
      <p className="mb-6 indent-6">
        At Synergie Belgium, I developed and maintained the different brand
        websites, web applications, and the intranet platform, translating Figma
        designs into intuitive, responsive, and accessible interfaces while
        optimizing existing systems.
      </p>
      <BulletPoints bulletpoints={synergieTasksBP} className="mb-20" />
      <div className="mx-6 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {synergieStackBP.map((bp) => (
          <BulletPointsWithTitle
            key={bp.title}
            content={bp}
            className="mb-10 last:mb-20"
          />
        ))}
      </div>
      <ImageGrid images={synergieImages} />
    </>
  );
};

export default Synergie;
