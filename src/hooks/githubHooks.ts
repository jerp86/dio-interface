import { useContext } from "react";

import { GithubContext } from "../providers";

const useGithub = () => {
  const { repositories, starred, user } = useContext(GithubContext);

  return { repositories, starred, user };
};

export default useGithub;
