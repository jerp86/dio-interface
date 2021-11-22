import { useContext } from "react";

import { GithubContext } from "../providers";

const useGithub = () => {
  const { getUser, githubState } = useContext(GithubContext);

  return { getUser, githubState };
};

export default useGithub;
