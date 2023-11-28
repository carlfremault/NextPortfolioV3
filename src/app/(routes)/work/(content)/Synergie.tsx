import BulletPoints from "@/app/_components/BulletPoints";
import ImageGrid from "@/app/_components/ImageGrid";

export const synergieInfo: CollapseHeaderInfo = {
  name: "synergie",
  timeFrame: "from October 2022 until now",
  title: "Frontend Developer React",
  company: "Synergie Belgium",
  companyHref: "https://www.synergiejobs.be",
};

const synergieBP: BulletPoint[] = [
  {
    title: "React Development",
    text: "Implementing React to create intuitive interfaces from design concepts, continually improving my frontend development skills.",
  },
  {
    title: "User Experience Enhancement",
    text: "Elevating web properties' functionality to ensure engaging user interaction and visually captivating interfaces, prioritizing a seamless user experience.",
  },
  {
    title: "Web Asset Maintenance and Optimization",
    text: "Ensuring continuous maintenance, improvement, and optimization of existing assets to sustain their functionality and performance.",
  },
  {
    title: "Collaborative Learning",
    text: "Actively engaging with experienced developers to learn and contribute to team projects, fostering a culture of knowledge exchange and collaborative growth.",
  },
];

const synergieImages: GridImage[] = [
  {
    src: "/SynergieOurJobIsYourJob.jpg",
    alt: "The Synergie website front page",
    height: 994,
    width: 1607,
  },
  {
    src: "/SynergieApplySpontaneously.jpg",
    alt: "A form to fill out for users wanting to apply for a job spontaneously",
    height: 994,
    width: 1607,
  },
  {
    src: "/SynergieOurOffices.jpg",
    alt: "The 'offices' page where users can view and search offices all accross Belgium",
    height: 994,
    width: 1607,
  },
  {
    src: "/SynergieFlexiJobs.jpg",
    alt: "The FlexiJobs landing page",
    height: 994,
    width: 1607,
  },
];

const Synergie = (): JSX.Element => {
  return (
    <>
      <p className="mb-10 indent-6">
        In my role at Synergie Belgium within the Digital Development team, I am
        dedicated to developing and maintaining various web assets, encompassing
        websites, web applications, and the intranet platform.
      </p>
      <BulletPoints bulletpoints={synergieBP} />
      <ImageGrid images={synergieImages} />
    </>
  );
};

export default Synergie;
