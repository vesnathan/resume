import { Divider } from "@nextui-org/react";

export function EmploymentContent() {
  //
  return (
    <div className="relative flex justify-center h-full">
      <div className="grid grid-cols-12 relative z-10 h-full w-full">
        <div className="col-span-11 xl:col-span-8">
          <div className="flex flex-col p-10 text-white">
            <h1 className="text-primary text-[30px]">
              EMPLOYMENT <span className="text-white">HISTORY</span>
            </h1>
            <Divider className="bg-white mb-5" />
            <div className=" ml-10">
              <h3 className="font-bold">Web Developer, Evolucian, Sydney</h3>
              <h4>March 2022 - present</h4>
              <ul className="p-5">
                <li>
                  Developed and maintained full-stack applications with a focus
                  on responsive, accessible user interfaces and robust backends
                  using React, Next.js, and AWS services.
                </li>
                <li>
                  Collaborated with cross-functional teams to enhance UI/UX and
                  optimize application performance, reducing load times through code refactoring and efficient asset management.
                </li>
                <li>
                  Implemented serverless architecture with AWS, leveraging
                  services like DynamoDB, CloudFront, and WAF to ensure high
                  availability and security compliance.
                </li>
                <li>
                  Designed user authentication workflows using AWS Cognito,
                  integrating MFA and secure data management protocols.
                </li>
                <li>
                  Improved frontend consistency and maintainability by
                  integrating component libraries such as Material UI, NextUI,
                  Styled Components, and Tailwind CSS.
                </li>
              </ul>

              <h3 className="font-bold">
                Senior Event Technician, Scene Change, Hobart
              </h3>
              <h4>January 2018 - March 2022</h4>
              <ul className="p-5">
                <li>
                  Planned, installed and operated event equipment such as
                  lighting and audio consoles.
                </li>
                <li>
                  As a part of this role I built a web based presentation timer
                  using AWS, JQuery, Node.JS and Websockets.io .This system is
                  able to accommodate multiple rooms/sessions and be customised
                  to match the event branding. It is completely recoverable
                  should the websockets connection be disrupted.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
