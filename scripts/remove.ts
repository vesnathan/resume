import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { execCommandAsPromise } from "./execCommandAsPromise";
import { ValidEnv, validEnvironments } from "../config/validEnvs";

type OutputOption = {
  OUTPUT_PATH: string;
};

interface DeployOptions {
  outputs?: OutputOption[];
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
    .demandOption("stage", "Please provide the --stage argument to deploy")
    .help().argv;
};

const removeSlsBackend = async (options: DeployOptions) => {
  const argv = await parseDeployArgs(
    options.allowedStages || Array.from(validEnvironments),
  );

  const STAGE = argv.stage;
  if (!STAGE) {
    throw new Error("Must specify stage with --stage option");
  }
  return execCommandAsPromise(`cd backend && npx sls remove --stage ${STAGE}`);
};

const start = async () => {
  try {
    await removeSlsBackend({ allowedStages: [...validEnvironments] });
  } catch (error) {
    console.error("Remove process failed:", error);
    process.exit(1);
  }
};

start();
