import React, { createContext, useCallback, useState } from "react";

import { api } from "../services";
import { sortedArray } from "../utils";

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

export type IRepoProps = {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
};

type IStateProps = {
  loading: boolean;
  hasUser: boolean;
  user: IUserProps;
  repositories: IRepoProps[];
  starred: IRepoProps[];
};

type IContextProps = {
  githubState: IStateProps;
  getUser: (value: string) => void;
  getRepos: () => void;
  getStarred: () => void;
};

export const GithubContext = createContext<IContextProps>({} as IContextProps);

const GithubProvider: React.FC = ({ children }) => {
  const [githubState, setGithubState] = useState({} as IStateProps);

  const getUser = async (username: string) => {
    setGithubState((prev: IStateProps) => ({
      ...prev,
      loading: !prev.loading,
    }));
    try {
      const { data } = await api.get(`users/${username}`);
      const user = data as IUserProps;

      setGithubState((prev: IStateProps) => ({ ...prev, user, hasUser: true }));
    } catch (error) {
      console.warn(error);
    }
    setGithubState((prev: IStateProps) => ({
      ...prev,
      loading: !prev.loading,
    }));
  };

  const getRepos = async () => {
    const { user } = githubState;

    if (!user) return;

    try {
      setGithubState((state: IStateProps) => ({ ...state, repositories: [] }));
      const { data } = await api.get(`users/${user.login}/repos`);
      const repositories = sortedArray(data as IRepoProps[]);

      setGithubState((state: IStateProps) => ({ ...state, repositories }));
    } catch (error) {
      console.warn(error);
    }
  };

  const getStarred = async () => {
    const { user } = githubState;

    if (!user) return;

    try {
      setGithubState((state: IStateProps) => ({ ...state, starred: [] }));
      const { data } = await api.get(`users/${user.login}/starred`);
      const starred = sortedArray(data as IRepoProps[]);

      setGithubState((state: IStateProps) => ({ ...state, starred }));
    } catch (error) {
      console.warn(error);
    }
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username: string) => getUser(username), []),
    getRepos: useCallback(() => getRepos(), [githubState.user]),
    getStarred: useCallback(() => getStarred(), [githubState.user]),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
