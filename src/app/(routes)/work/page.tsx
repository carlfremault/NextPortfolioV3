import React from "react";
import Image from "next/image";

const WorkPage = () => {
  return (
    <div className="space-y-12">
      <div className="text-right">
        <p className="text-sm italic">from October 2022 until now</p>
        <h2 className="font-serif text-xl">Frontend Developer React</h2>
        <a
          href="https://www.synergiejobs.be"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          Synergie Belgium
        </a>
      </div>
      <div className="space-y-6">
        <p className="indent-8">
          In my role at Synergie Belgium within the Digital Development team, I
          am dedicated to developing and maintaining various web assets,
          encompassing websites, web applications, and the intranet platform.
        </p>
        <ul className="ms-6 list-outside list-disc space-y-4">
          <li>
            <span className="font-bold">React Development:</span> Implementing
            React to create intuitive interfaces from design concepts,
            continually improving my frontend development skills.
          </li>
          <li>
            <span className="font-bold">User Experience Enhancement:</span>{" "}
            Elevating web properties&apos; functionality to ensure engaging user
            interaction and visually captivating interfaces, prioritizing a
            seamless user experience.
          </li>
          <li>
            <span className="font-bold">
              Web Asset Maintenance and Optimization:
            </span>{" "}
            Ensuring continuous maintenance, improvement, and optimization of
            existing assets to sustain their functionality and performance.
          </li>
          <li>
            <span className="font-bold">Collaborative Learning:</span> Actively
            engaging with experienced developers to learn and contribute to team
            projects, fostering a culture of knowledge exchange and
            collaborative growth.
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <Image
          src="/SynergieOurJobIsYourJob.png"
          alt=""
          height={994}
          width={1607}
        />
        <Image
          src="/SynergieApplySpontaneously.png"
          alt=""
          height={994}
          width={1607}
        />
        <Image src="/SynergieOurOffices.png" alt="" height={994} width={1607} />
        <Image src="/SynergieFlexiJobs.png" alt="" height={994} width={1607} />
      </div>
    </div>
  );
};

export default WorkPage;
