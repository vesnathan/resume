import appsyncLogo from "../assets/images/appsync.png";
import cognitoLogo from "../assets/images/cognito.png";
import dynamodbLogo from "../assets/images/ddb.png";
import graphqlLogo from "../assets/images/gql.png";
import eslintLogo from "../assets/images/eslint.png";
import framerMotionLogo from "../assets/images/framermotion.png";
import jestLogo from "../assets/images/jest.png";
import lambdaLogo from "../assets/images/lambda.png";
import lernaLogo from "../assets/images/lerna.png";
import MUILogo from "../assets/images/mui.png";
import nextjsLogo from "../assets/images/nextjs.png";
import playwrightLogo from "../assets/images/playwright.png";
import reactLogo from "../assets/images/react.png";
import rhfLogo from "../assets/images/rhf.png";
import serverlessLogo from "../assets/images/sls.png";
import tailwimndLogo from "../assets/images/tailwind.png";
import typescriptLogo from "../assets/images/ts.png";
import zodLogo from "../assets/images/zod.png";
import zustandLogo from "../assets/images/zustand.png";
import echartsLogo from "../assets/images/echarts.png";
import nodejsLogo from "../assets/images/nodejs.png";
import html5Logo from "../assets/images/html5.png";
import css3Logo from "../assets/images/css3.png";
import jsLogo from "../assets/images/js.png";
import { StaticImageData } from "next/image";

export type LogoType = {
  name: string,
  src: StaticImageData,
  link: string
};
export const techStack: LogoType[] = [
  {
    name: "React",
    src: reactLogo,
    link: "https://react.dev/",
  },
  {
    name: "TypeScript",
    src: typescriptLogo,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Next.js",
    src: nextjsLogo,
    link: "https://nextjs.org/",
  },
  {
    name: "Serverless",
    src: serverlessLogo,
    link: "https://www.serverless.com/",
  },
  
  {
    name: "AppSync",
    src: appsyncLogo,
    link: "https://aws.amazon.com/appsync/",
  },
  {
    name: "GraphQL",
    src: graphqlLogo,
    link: "https://graphql.org/",
  },
  {
    name: "Cognito",
    src: cognitoLogo,
    link: "https://aws.amazon.com/cognito/",
  },
  {
    name: "DynamoDB",
    src: dynamodbLogo,
    link: "https://aws.amazon.com/dynamodb/",
  },
  {
    name: "NodeJS",
    src: nodejsLogo,
    link: "https://nodejs.org/en",

  },
  {
    name: "Lambda",
    src: lambdaLogo,
    link: "https://aws.amazon.com/lambda/",
  },
  {
    name: "HTML5",
    src: html5Logo,
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5CSS3",
  },
  {
    name: "CSS3",
    src: css3Logo,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    src: jsLogo,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

];


export const libs = [

  {
    name: "Tailwind CSS",
    src: tailwimndLogo,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Lerna",
    src: lernaLogo,
    link: "https://lerna.js.org/",
  },
  {
    name: "React Hook Form",
    src: rhfLogo,
    link: "https://react-hook-form.com/",
  },
  {
    name: "Zod",
    src: zodLogo,
    link: "https://zod.dev/",
  },
  {
    name: "Zustand",
    src: zustandLogo,
    link: "https://zustand.surge.sh/",
  },
  {
    name: "Jest",
    src: jestLogo,
    link: "https://jestjs.io/",
  },
  {
    name: "ESLint",
    src: eslintLogo,
    link: "https://eslint.org/",
  },
  {
    name: "Framer Motion",
    src: framerMotionLogo,
    link: "https://www.framer.com/motion/",
  },
  {
    name: "Material-UI",
    src: MUILogo,
    link: "https://mui.com/",
  },
  {
    name: "Playwright",
    src: playwrightLogo,
    link: "https://playwright.dev/",
  },
  {
    name: "eCharts",
    src: echartsLogo,
    link: "https://echarts.apache.org/en/index.html",
  },
];
