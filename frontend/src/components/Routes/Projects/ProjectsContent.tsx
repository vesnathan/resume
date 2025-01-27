import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { Project, projects } from "@/constants/projects";

const liCSS = "mb-0";

export function ProjectsContent() {
  //
  return (
    <div className="relative flex justify-center h-full">
      <div className="grid grid-cols-12 relative z-10 h-full w-full">
        <div className="col-span-11 xl:col-span-8">
          <div className="flex flex-col p-10 text-white">
            <h1 className="text-primary text-[30px]">
              MY <span className="text-white">Projects</span>
            </h1>
            <Divider className="bg-white mb-5" />
            <div className="flex flex-col gap-5 ml-10">
              {projects.map((project: Project) => (
                <div className="flex flex-col" key={project.id}>
                  <h2 className="font-bold text-[20px]">{project.name}</h2>
                  <div>{project.description}</div>
                  <div className="flex flex-row mt-5">
                    <div>
                    {project.image && project.imageAlt && (
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        width={500}
                        height={0}
                      />
                      )}
                      <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2 mt-5">
                          <div className="">{project.liveDemo && project.liveDemo }</div>
                          <div className="">{project.github}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5">
                    <div className="font-semibold">Technologies Used:</div>
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                          <div className="ml-5">
                            <ul>
                              {project.technologies.slice(0, 10).map((tech: string) => (
                                <li key={tech} className={liCSS}>
                                  {tech}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {project.technologies.length > 10 && (
                          <div className="flex flex-col ml-10">
                            <div className="ml-5">
                              <ul>
                                {project.technologies.slice(10).map((tech: string) => (
                                  <li key={tech} className={liCSS}>
                                    {tech}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>  
                    </div>            
                  </div>
                  <Divider className="bg-white mb-5 opacity-20 mt-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
