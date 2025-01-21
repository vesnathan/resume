/* eslint-disable no-console */
import { spawn } from "child_process";

export const execCommandAsPromise = (
  command: string,
  options: {
    captureStdOut?: boolean;
  } = {},
) => {
  const { captureStdOut } = options;
  return new Promise<string>((resolve, reject) => {
    let stdOut: string = "";
    console.log(`Executing command: ${command}`);

    const childProcess = spawn(command, {
      shell: true,
      stdio: ["inherit", captureStdOut ? "pipe" : "inherit", "inherit"],
    });

    if (captureStdOut) {
      childProcess.stdout?.on("data", (data) => {
        const dataString: string = data.toString();
        stdOut += dataString;
        console.log(`stdout: ${dataString}`);
      });
    }

    childProcess.on("error", (error) => {
      console.error(`Error spawning child process for command: ${command}`);
      console.error(`Error details: ${error.message}`);
      reject(error);
    });

    childProcess.on("close", (code) => {
      if (code === 0) {
        console.log(`Command executed successfully: ${command}`);
        resolve(stdOut);
      } else {
        console.error(`Command failed with exit code: ${code}`);
        reject(new Error(`Child process exited with code ${code}`));
      }
    });
  });
};
