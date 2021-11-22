import React, { createContext, useEffect, useState } from "react";

import { api } from "../services";

type IUserProps = {
  avatar_url?: string;
  login: string;
  name: string;
  html_url: string;
  blog?: string;
  company?: string;
  location?: string;
  followers?: number;
  following?: number;
  public_gists?: number;
  public_repos?: number;
};

type IContextProps = {
  user: IUserProps;
  repositories: [];
  starred: [];
};

export const GithubContext = createContext<IContextProps>({
  user: {} as IUserProps,
  repositories: [],
  starred: [],
});

const GithubProvider: React.FC = ({ children }) => {
  const [githubState, setGithubState] = useState<IContextProps>(
    {} as IContextProps
  );

  const contextValue = {
    ...githubState,
  };

  useEffect(() => {
    api
      .get("users/jerp86")
      .then((res) => {
        const newUser = res.data as IUserProps;
        setGithubState((prev: IContextProps) => ({ ...prev, user: newUser }));
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
