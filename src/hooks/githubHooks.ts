import { useContext } from "react";

import { GithubContext } from "../providers";

const useGithub = () => {
  const { getUser, getRepos, githubState } = useContext(GithubContext);

  return { getUser, getRepos, githubState };
};

export default useGithub;
