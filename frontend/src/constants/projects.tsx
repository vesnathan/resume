import personalWebsiteImage from "@/assets/images/personalSite.png";
import bjImage from "@/assets/images/bj.png";
import { JSX } from "react";
import { StaticImageData } from "next/image";
import { Button } from "@nextui-org/react";
import gsbImage from "@/assets/images/gsb.png";
import cwlImage from "@/assets/images/cwl.png";

export interface Project {
  id: number;
  name: string;
  description: JSX.Element;
  image?: StaticImageData;
  imageAlt?: string;
  technologies: string[];
  liveDemo?: JSX.Element;
  liveDemoText?: JSX.Element;
  github: JSX.Element;
  githubText?: JSX.Element;
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
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    github: (<Button onClick={() => {window.open("https://github.com/vesnathan/resume", "_blank");
      }}>GitHub</Button>
    ),
  },  {
    id: 1,
    name: "Machine Learning Answer Inference (2023)",
    description: (
      <div>
        This project will infer a correct or incorrect label to a students answer when given that answer, the question, and the document text. The deployment creates a Lambda function which loads a Docker container with Python 3.8 and Pytorch as well as Transformers and other required libraries. 
      </div>
    ),

    technologies: [
      "Python",
      "Jupyter Notebook",
      "Google Colab",
      "AWS Serverless Application Model",
      "Pytorch",
      "Docker",
      "AWS Lambda",
      "AWS DynamoDB",
      "PyTorch",
      "Transformers",
    ],
    github: (<Button onClick={() => {window.open("https://github.com/vesnathan/SAM_ML_QA", "_blank");
      }}>GitHub</Button>
    ),
  },
  {
    id: 2,
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
        <span className="font-bold">Live Demo</span>
        <p>Please note that this stack is expensive to run for a not in production app. I am happy to demo for you but the stack will need to be deployed first.</p>
        
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
      "HTML5",
      "CSS3",
      "JavaScript",
      "GitHub Actions",
    ],
    liveDemoText: (<p>
      This stack is expensive to run for an application not yet in
      production. If you would like a demo I am happy to arrange this with
      you.
    </p>),
    github: (
      <Button onClick={() => {
        window.open("https://github.com/vesnathan/nl-mono-repo", "_blank");
      }}>GitHub</Button>
    ),
  },
  {
    id: 3,
    name: "Black Jack Advantage Play Trainer (2022)",
    description: (
      <div>
        <p>
          This was a project I completed as the final presentation for the Web
          Dev Bootcamp. The project is not complete as it was built in two weeks and I haven&apos;t yet had time to revisit it.  
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
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    liveDemo: (
      <Button onClick={() => {
        window.open("https://d3ze7h7tukqiz.cloudfront.net", "_blank");
      }}>Live Demo</Button>
    ),
    github: (
      <Button onClick={() => {
        window.open("https://github.com/vesnathan/blackjack-card-counting-trainer", "_blank");
      }}>GitHub</Button>
    ),
  },
  {
    id: 4,
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
    technologies: ["JavaScript", "HTML", "Sockets.IO", "Express", "Node.js", "AWS EC2", "Apache", "MariaDB"],
    liveDemo: (
      <Button onClick={() => {
        window.open("http://52.62.53.91:3000/demo.html", "_blank");
      }}>Live Demo</Button>
    ),
    github: (
      <Button onClick={() => {
        window.open("https://github.com/vesnathan/GameShowBuzzer/", "_blank");
      }}>GitHub</Button>
    ),
  },
];
