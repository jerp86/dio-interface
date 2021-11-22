import { IRepoProps } from "../providers";

export const sortedArray = (value: IRepoProps[]) => {
  return value.sort((a, b) => a.name.localeCompare(b.name));
};
