export const validEnvironments = ["nldev"] as const;

export type ValidEnv = (typeof validEnvironments)[number];

export const isValidEnv = (val: string | null | undefined): val is ValidEnv => {
  return !!val && Array.from<string>(validEnvironments).includes(val);
};
