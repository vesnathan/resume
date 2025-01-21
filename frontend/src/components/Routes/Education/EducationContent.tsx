import { Divider, Image } from "@nextui-org/react";
import unswLogo from "../../../assets/images/unsw.png";
import juliusmediaLogo from "../../../assets/images/juliusmedia.png";

export function EducationContent() {
  //
  return (
    <div className="relative flex justify-center h-full">
      <div className="grid grid-cols-12 relative z-10 h-full w-full">
        <div className="col-span-11 xl:col-span-8">
          <div className="flex flex-col p-10 text-white">
            <h1 className="text-primary text-[30px]">
              MY <span className="text-white">EDUCATION</span>
            </h1>
            <Divider className="bg-white mb-5" />
            <div className="grid grid-cols-12 gap-5 mt-10 ml-10 mb-10">
              <div className="col-span-2">
                <Image
                  alt="Card example background"
                  className=" col-span-2 z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={unswLogo.src}
                />
              </div>
              <div className="col-span-10 ml-5 mt-[-35px] flex flex-col items-start justify-start">
                <span className="font-bold">
                  University of New South Wales (Jan-June 2021)
                </span>
                <span className="mb-5">Web Development Bootcamp</span>
                <ul>
                  <li>
                    Completed this intensive program with a final score
                    exceeding 100%.
                  </li>
                  <li>
                    Gained hands-on experience with front-end and back-end
                    technologies including HTML, CSS, JavaScript, Node.js,
                    Express, and React.
                  </li>
                  <li>
                    Collaborated on group projects that focused on building
                    real-world applications, honing my teamwork and agile
                    development skills.
                  </li>
                  <li>
                    Demonstrated strong problem-solving abilities, consistently
                    offering innovative solutions during coding challenges and
                    project sprints.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-5 mt-10 ml-10">
              <div className="col-span-2">
                <Image
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={juliusmediaLogo.src}
                />
              </div>
              <div className="col-span-10 ml-5 mt-[-35px] flex items-start flex-col justify-start">
                <span className="font-bold">Julius Media (2016)</span>
                <span className="mb-5">
                  Advanced Diploma of Theatre and Special Events
                </span>
                <ul>
                  <li>
                    Graduated at the top of my class, demonstrating a high level
                    of creativity and dedication.
                  </li>
                  <li>
                    Developed expertise in event planning, stage design, sound
                    and lighting, and theatrical production management.{" "}
                  </li>
                  <li>
                    Led multiple student-led productions from inception to
                    execution, managing budgets, scripts, technical rehearsals,
                    and live show operations.{" "}
                  </li>
                  <li>
                    Received recognition for leadership, attention to detail,
                    and ability to stay calm under pressure in fast-paced,
                    live-event environments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
