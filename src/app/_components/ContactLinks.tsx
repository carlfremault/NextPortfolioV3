import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const ContactLinks = () => {
  const contactLinks = [
    {
      name: "GitHub",
      href: "https://github.com/carlfremault",
      logo: <RxGithubLogo size={20} className="me-2" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/carl-fremault/",
      logo: <RxLinkedinLogo size={20} className="me-2" />,
    },
  ];
  return (
    <div className="mb-6 p-5  text-orange-300">
      <ul className="space-y-8">
        {contactLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              {link.logo}
              <span className="">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLinks;
