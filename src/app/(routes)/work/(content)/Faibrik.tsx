import BulletPoints from "@/app/_components/BulletPoints";
import React from "react";
import { faibrikBP, faibrikImages } from "./faibrikContent";
import ImageGrid from "@/app/_components/ImageGrid";

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
