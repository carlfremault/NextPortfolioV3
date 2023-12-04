import React from "react";
import BulletPoints from "@/app/_components/BulletPoints";
import ImageGrid from "@/app/_components/ImageGrid";

export const faibrikInfo: CollapseHeaderInfo = {
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
    src: "/images/faibrikAbout.png",
    alt: "MS Teams app store page detailing the fAIbrik app",
    height: 637,
    width: 764,
  },
  {
    src: "/images/faibrikAlerte.png",
    alt: "A MS Teams alert from the app",
    height: 373,
    width: 622,
  },
  {
    src: "/images/faibrikBienvenue.png",
    alt: "The app welcome dialogua, proposing to connect to the user's fAIbrik account and to subscribe to the alerts",
    height: 654,
    width: 953,
  },
  {
    src: "/images/faibrikMenu.png",
    alt: "A menu detailing the app's possibilities: connecting, disconnecting and (un)subscribing to alerts",
    height: 343,
    width: 971,
  },
  {
    src: "/images/faibrikNouveauClient.png",
    alt: "When a user indicated not being a fAIbrik client yet, (s)he is invited to visit the company's website",
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
      <BulletPoints bulletpoints={faibrikBP} className="mb-20" />
      <ImageGrid images={faibrikImages} />
    </div>
  );
};

export default Faibrik;
