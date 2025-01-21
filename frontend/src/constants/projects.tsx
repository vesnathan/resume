import personalWebsiteImage from "@/assets/images/personalSite.png";
import bjImage from "@/assets/images/bj.png";
import { JSX } from "react";
import { StaticImageData } from "next/image";
import { Link } from "@nextui-org/react";
import gsbImage from "@/assets/images/gsb.png";
import cwlImage from "@/assets/images/cwl.png";

export interface Project {
  id: number;
  name: string;
  description: JSX.Element;
  image: StaticImageData;
  imageAlt: string;
  technologies: string[];
  liveDemo: JSX.Element;
  github: JSX.Element;
}

export const projects: Project[] = [
  {
    id: 0,
    name: "Personal Website (2024)",
    description: (
      <div>
        The Personal Website (2024) is a modern portfolio platform showcasing my
        skills and projects. Built with cutting-edge technologies like React,
        TypeScript, and Next.js, the site features a sleek and interactive
        design powered by NextUI, Framer Motion, and Zustand. It highlights my
        expertise in building dynamic, responsive, and user-friendly web
        applications.
      </div>
    ),
    imageAlt: "Personal Website",
    image: personalWebsiteImage,

    technologies: [
      "React",
      "TypeScript",
      "Next.JS",
      "NextUI",
      "Framer Motion",
      "Zustand",
    ],
    liveDemo: <div />,
    github: <div />,
  },
  {
    id: 1,
    name: "Cloudwatch Live (2024 - )",
    description: (
      <div>
        <p>
          Cloudwatch Live is a web application designed for event managers to
          create agendas and live-stream their conferences seamlessly. It
          integrates with YouTube Live, enabling technical teams to stream
          directly to YouTube, while the platform automatically retrieves and
          displays the stream for the audience.
        </p>
        <p>
          This stack is expensive to run for an application not yet in
          production. If you would like a demo I am happy to arrange this with
          you.
        </p>
      </div>
    ),
    image: cwlImage,
    imageAlt: "Cloudwatch Live",
    technologies: [
      "React",
      "TypeScript",
      "Next.JS",
      "NextUI",
      "Framer Motion",
      "Zustand",
      "AWS Amplify",
      "AWS Cognito",
      "AWS AppSync",
      "AWS DynamoDB",
      "AWS S3",
      "AWS Cloudfront",
      "AWS Route 53",
      "AWS Lambda",
    ],
    liveDemo: <div />,
    github: (
      <Link href="https://github.com/vesnathan/nl-mono-repo" isExternal isBlock>
        GitHub
      </Link>
    ),
  },
  {
    id: 2,
    name: "Black Jack Advantage Play Trainer (2022)",
    description: (
      <div>
        <p>
          This was a project I completed as the final presentation for the Web
          Dev Bootcamp.{" "}
        </p>
        <p>
          The project is a web application that allows users to practice their
          card counting skills in the game of Black Jack.
        </p>
        <p>
          The application uses a custom algorithm to simulate a real Black Jack
          game and provides feedback to the user on their card counting
          accuracy.
        </p>
      </div>
    ),
    image: bjImage,
    imageAlt: "Black Jack Advantage Play Trainer",
    technologies: [
      "React",
      "TypeScript",
      "Serverless",
      "Sass - SCSS",
      "DynamoDB/GraphQL",
      "Cognito",
      "MaterialUI",
      "Styled Components",
      "ESLint - Air BnB",
      "Husky",
      "bcrypt",
      "JSON Web Token",
      "PWA",
      "Stripe Elements",
    ],
    liveDemo: (
      <Link href="https://d3ze7h7tukqiz.cloudfront.net" isExternal>
        Live Demo
      </Link>
    ),
    github: (
      <Link
        href="https://github.com/vesnathan/blackjack-card-counting-trainer"
        isExternal
      >
        GitHub
      </Link>
    ),
  },
  {
    id: 3,
    name: "Game Show Buzzer (2016)",
    description: (
      <div>
        <p>
          This is a self taught project I worked on for fun before I started
          learning web development professionally.
        </p>
        <p>
          The system allows users to connect a button screen on their phone to a
          session on a server. Other mini-computers or Raspberry Pi&apos;s can
          be used for a score screen for each player, and another for a main
          scoreboard.
        </p>
        <p>
          I have also created PowerPoint plugins for this system to allow for
          easy control of the game from the host&apos;s computer.
        </p>
      </div>
    ),
    image: gsbImage,
    imageAlt: "Game Show Buzzer",
    technologies: ["JavaScript", "HTML", "Sockets.IO", "Express", "Node.js"],
    liveDemo: (
      <Link href="http://52.62.53.91:3000/demo.html" isExternal>
        Live Demo
      </Link>
    ),
    github: (
      <Link href="https://github.com/vesnathan/GameShowBuzzer/" isExternal>
        GitHub
      </Link>
    ),
  },
];
