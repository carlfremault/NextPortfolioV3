import React from "react";

const StackPage = () => {
  return (
    <div className="space-y-12">
      <div className="border-b  border-b-orange-300 pb-10">
        <div className="mb-12 flex items-center justify-center md:justify-end">
          <h2 className="text-right font-serif text-xl">
            Professional experience
          </h2>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-3">Javascript</h3>
              <ul className="list-inside list-disc">
                <li>React</li>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">HTML, CSS</h3>
              <ul className="list-inside list-disc">
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Reactstrap</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Databases</h3>
              <ul className="list-inside list-disc">
                <li>MongoDB</li>
                <li>MongoDB Compass</li>
                <li>SQL, Transact-SQL</li>
                <li>Azure Data Studio</li>
                <li>MySQL Workbench</li>
                <li>Sequelize</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Validation</h3>
              <ul className="list-inside list-disc">
                <li>Joi</li>
                <li>Zod</li>
                <li>Yup</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Tools</h3>
              <ul className="list-inside list-disc">
                <li>Git, Gitlab</li>
                <li>ESLint, Prettier</li>
                <li>Sentry</li>
                <li>Formik</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b  border-b-orange-300 pb-10">
        <div className="mb-12 flex items-center justify-center md:justify-end">
          <h2 className="text-right font-serif text-xl">Academic experience</h2>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-3">Languages</h3>
              <ul className="list-inside list-disc">
                <li>C#</li>
                <li>Java</li>
                <li>PHP (Symphony)</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Databases</h3>
              <ul className="list-inside list-disc">
                <li>SQL, MySQL, PostgreSQL</li>
                <li>Neo4j</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Tools</h3>
              <ul className="list-inside list-disc">
                <li>SonarLint</li>
                <li>SonarQube</li>
                <li>Jenkins</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Modelling</h3>
              <ul className="list-inside list-disc">
                <li>UML</li>
                <li>Merise/2</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Concepts</h3>
              <ul className="list-inside list-disc">
                <li>MVC</li>
                <li>REST API</li>
                <li>Design Patterns</li>
                <li>SOLID principles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackPage;
