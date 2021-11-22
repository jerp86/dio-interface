import { useContext } from "react";

import { GithubContext } from "../providers";

const useGithub = () => {
  const { getUser, getRepos, getStarred, githubState } =
    useContext(GithubContext);

  return { getUser, getRepos, getStarred, githubState };
};

export default useGithub;
