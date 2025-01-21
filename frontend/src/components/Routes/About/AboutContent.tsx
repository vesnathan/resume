import { Divider } from "@nextui-org/react";
import React from "react";

export function AboutContent() {
  //
  return (
    <div className="relative flex justify-center h-full">
      <div className="grid grid-cols-12 relative z-10 h-full w-full">
        <div className="col-span-11 xl:col-span-8">
          <div className="flex flex-col p-10 text-white">
            <h1 className="text-primary text-[30px]">
              ABOUT <span className="text-white">ME</span>
            </h1>
            <Divider className="bg-white mb-5" />
            <div className=" ml-10">
              <p>
                Hi, I&apos;m Nathan Loudon, a driven Mid-level Full Stack Web
                Developer with over three years of experience crafting modern,
                scalable, and secure web applications. My skill set includes
                leveraging advanced technologies like React, Next.js, and
                Tailwind CSS to build responsive, visually appealing, and
                user-centric interfaces. On the backend, I specialize in
                serverless architectures, utilizing AWS services such as
                Cognito, DynamoDB, CloudFront, and WAF to create efficient,
                high-performing solutions.
              </p>
              <p>
                My passion for technology started early—programming for fun in
                high school with languages like BASIC and C++, tinkering with
                Arduino electronics, and developing LAMP stack projects for
                small businesses. These experiences laid the foundation for a
                career focused on solving complex challenges through technology.
              </p>
              <p>
                When the COVID-19 pandemic disrupted my event technology career,
                I seized the opportunity to transform my lifelong passion into a
                profession. I completed a rigorous Full Stack Web Development
                bootcamp, equipping me with the skills to design and build
                dynamic, end-to-end web applications. Shortly after, I joined
                Evolucion, where I&apos;ve been instrumental in delivering
                high-quality software solutions.
              </p>
              <p>
                At Evolucion, I&apos;ve collaborated with cross-functional teams
                to:
              </p>
              <ul className="ml-5">
                <li>Enhance UI/UX by creating seamless user experiences. </li>
                <li>
                  Optimize performance, resulting in reduced load times and
                  improved user satisfaction.{" "}
                </li>
                <li>
                  Implement robust security features such as multi-factor
                  authentication (MFA).
                </li>
              </ul>
              <p>
                My commitment to clean, maintainable code and user-focused
                solutions has consistently driven project success. I also draw
                on my event technology background to innovate; I&apos;ve
                developed tools like custom web-based presentation timers and
                interactive game systems, showcasing my ability to think
                creatively and deliver results.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m likely exploring the
                Australian east coast aboard my 44&apos; yacht, pursuing my love
                of sailing. I also enjoy playing the guitar and drums, as well
                as oil painting, balancing my technical pursuits with creative
                endeavors.
              </p>
              <p>
                I&apos;m always eager to take on new challenges and contribute
                to impactful projects. If you&apos;re looking for a passionate
                developer who thrives at the intersection of creativity and
                technology, I&apos;d love to connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
