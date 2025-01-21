/* eslint-disable no-console */
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { execCommandAsPromise } from "./execCommandAsPromise";
import { ValidEnv, validEnvironments } from "../config/validEnvs";

interface DeployOptions {
  allowedStages?: ValidEnv[];
}

const parseDeployArgs = async (allowedStages: string[]) => {
  return yargs(hideBin(process.argv))
    .option("stage", {
      alias: "s",
      type: "string",
      description: "Serverless stage",
      requiresArg: true,
      choices: allowedStages,
    })
    .option("frontend", {
      alias: "feo",
      type: "boolean",
      description: "Sync FE only",
    })
    .demandOption("stage", "Please provide the --stage argument to deploy")
    .help().argv;
};

const deploySlsBackend = async (options: DeployOptions) => {
  const argv = await parseDeployArgs(
    options.allowedStages || Array.from(validEnvironments),
  );

  const DEPLOY_FRONTEND_ONLY = !!argv.frontend;

  const STAGE = argv.stage;
  if (!STAGE) {
    throw new Error("Must specify stage with --stage option");
  }

  process.env.NEXT_PUBLIC_ENVIRONMENT = STAGE;

  if (DEPLOY_FRONTEND_ONLY) {
    console.log(`\nDeploying frontend only to stage: ${STAGE}`);
    try {
      console.log("Building Next.js app...");
      await execCommandAsPromise(`yarn build`);
      console.log("Builkd completed");
      console.log("Upload frontend build to s3");
      await execCommandAsPromise(
        `cd backend && npx sls s3sync --stage ${STAGE}`,
      );
      return "Deployment successful";
    } catch (error) {
      console.error("Deployment failed:", error);
      throw error;
    }
  }

  console.log(`\nDeploying to stage: ${STAGE}`);
  try {
    const deployCommand = `cd backend && npx serverless deploy --stage ${STAGE} --verbose`;
    console.log(`Executing command: ${deployCommand}`);
    await execCommandAsPromise(deployCommand);
    return "Deployment successful";
  } catch (error) {
    console.error("Deployment failed:", error);
    throw error;
  }
};

const start = async () => {
  try {
    await deploySlsBackend({
      allowedStages: [...validEnvironments],
    });
  } catch (error) {
    console.error("Deployment process failed:", error);
    process.exit(1);
  }
};

start();
