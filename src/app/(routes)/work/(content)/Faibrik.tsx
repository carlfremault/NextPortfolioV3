import React from "react";
import BulletPoints from "@/app/_components/BulletPoints";
import ImageGrid from "@/app/_components/ImageGrid";

export const faibrikInfo: CollapseHeaderInfo = {
  name: "faibrik",
  timeFrame: "from 15 November until 31 December 2021",
  title: "Full-Stack Developer Internship",
  company: "fAIbrik - Annecy, France",
  companyHref: "https://www.faibrik.com",
};

const faibrikBP: BulletPoint[] = [
  {
    title: "Node.js Development",
    text: "Developing a standalone conversational bot using Microsoft Azure and Microsoft Bot Framework SDK.",
  },
  {
    title: "Microservices Integration",
    text: " Orchestrating communication between the bot and the fAIbrik web app using RabbitMQ queues.",
  },
  {
    title: "MongoDB Subscription Management",
    text: "Efficiently handling user subscriptions for alert notifications within the Microsoft Teams application.",
  },
];

const faibrikImages: GridImage[] = [
  {
    src: "/faibrikAbout.png",
    alt: "",
    height: 637,
    width: 764,
  },
  {
    src: "/faibrikAlerte.png",
    alt: "",
    height: 373,
    width: 622,
  },
  {
    src: "/faibrikBienvenue.png",
    alt: "",
    height: 654,
    width: 953,
  },
  {
    src: "/faibrikMenu.png",
    alt: "",
    height: 343,
    width: 971,
  },
  {
    src: "/faibrikNouveauClient.png",
    alt: "",
    height: 326,
    width: 625,
  },
];

const Faibrik = () => {
  return (
    <div>
      <p className="mb-10 indent-6">
        During my internship at fAIbrik, I developed a Microsoft Teams
        application allowing users to subscribe to alert notifications emanating
        from the fAIbrik web app. I created a standalone bot using Node.js,
        integrating it into the fAIbrik platform via Microsoft Azure. This
        involved implementing features such as the waterfall dialog system,
        Microsoft&apos;s Adaptive Cards, and managing user subscriptions in
        MongoDB. I also set up event handling through RabbitMQ queues.
        Additionally, I worked with tools like Ngrok, Postman, Auth0, and
        followed Agile methodology using Trello and Gitlab.
      </p>
      <BulletPoints bulletpoints={faibrikBP} />
      <ImageGrid images={faibrikImages} />
    </div>
  );
};

export default Faibrik;
