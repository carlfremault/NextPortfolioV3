import BulletPointsWithTitle from "@/app/_components/BulletPointsWithTitle";
import ImageGrid from "@/app/_components/ImageGrid";

export const synergieInfo: CollapseHeaderInfo = {
  timeFrame: "from October 2022 until now",
  title: "Frontend Developer React",
  company: "Synergie Belgium",
  companyHref: "https://www.synergiejobs.be",
};

const synergieBP: BulletPointsWithTitle[] = [
  {
    title: "Frontend",
    bulletpoints: [
      "Intranet homepage",
      "Blog pages, likes",
      "Messaging: recipients, React-RTE, …",
      "Data widgets",
      "Ticketing pages via Topdesk API",
      "User account pages",
      "User account settings",
      "Similar jobs page (on 404 job not found)",
      "Thank you page",
      "Registration flow",
      "GDPR Form",
      "Agencies map: react-google-maps",
      "Landing pages",
      "Development based on Figma designs",
      "Responsiveness",
      "A11y (Accessibility)",
      "GA tracking consent (cookies & context)",
      "Update Bootstrap v4 -> v5",
      "Convert JS(x) files to TS(x)",
      "Refactorings (e.g. code repetitions)",
    ],
  },
  {
    title: "FE Styling",
    bulletpoints: [
      "CSS incl. basic animations (spinners, buttons)",
      "Bootstrap",
      "Reactstrap",
      "Landing page with parallax effect",
    ],
  },
  {
    title: "Forms",
    bulletpoints: [
      "FE: React, Formik",
      "BE: Node.js",
      "Input validation: Zod, Yup, Joi",
      "React-select dropdowns",
      "React-phone-number-input",
      "Debounced search",
      "File uploads",
    ],
  },
  {
    title: "Routing",
    bulletpoints: ["Next.js (pages router)", "React-router-dom"],
  },
  {
    title: "User account handling",
    bulletpoints: [
      "Implementation of account creation & login",
      "Favorites, saved searches, applications",
      "Deferring user actions until after login/account creation (including session storage)",
    ],
  },
  {
    title: "Emailing",
    bulletpoints: ["Creation and use of dynamic Sendgrid email templates."],
  },
  {
    title: "Internationalization",
    bulletpoints: ["I18n"],
  },
  {
    title: "Backend",
    bulletpoints: [
      "Node.js",
      "Adding/modifying routes",
      "Validation",
      "Scripts, cron jobs",
    ],
  },
  {
    title: "Databases",
    bulletpoints: [
      "SQL, Sequelize",
      "MongoDB",
      "Compass",
      "Azure Data Studio",
      "MySQL Workbench",
      "Firebase",
    ],
  },
  {
    title: "Error handling",
    bulletpoints: ["Logging: Sentry", "Following up on Sentry errors"],
  },
  {
    title: "External APIs",
    bulletpoints: ["Using Postman for developing/debugging"],
  },
  {
    title: "SEO",
    bulletpoints: [
      "GSC monitoring",
      "Page titles, summaries, keywords",
      "Structured data",
    ],
  },
  {
    title: "Proceedings",
    bulletpoints: ["Topdesk ticketing", "Gitlab, Gitflow"],
  },
  {
    title: "Data Input",
    bulletpoints: [
      "Creation and follow up of procedures in our custom web applications.",
    ],
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

const Synergie = (): JSX.Element => {
  return (
    <>
      <p className="mb-10 indent-6">
        At Synergie Belgium, within the Digital Development team, I am dedicated
        to developing and maintaining our various websites, web applications,
        and the intranet platform.
      </p>
      <p className="mb-10 indent-6">
        My role involves implementing intuitive interfaces from Figma designs
        with React, continually refining my frontend development skills.
        Additionally, I focus on ensuring continuous maintenance, improvement,
        and optimization of existing assets to sustain their functionality and
        performance.
      </p>
      <div>
        {synergieBP.map((bp) => (
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
