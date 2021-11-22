import React, { useEffect, useState } from "react";
import { NoSearch } from "..";

import { useGithub } from "../../hooks";
import RepositoryItem from "../RepositoryItem";

import {
  ContainerTab,
  ContainerTabList,
  ContainerTabPanel,
  ContainerTabs,
} from "./styles";

const Repositories: React.FC = () => {
  const { getRepos, getStarred, githubState } = useGithub();
  const { user, repositories, starred } = githubState;

  useEffect(() => {
    if (user.login) {
      getRepos();
      getStarred();
    }
  }, [user.login]);

  if (!repositories || !starred) {
    return <></>;
  }

  return (
    <ContainerTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <ContainerTabList>
        <ContainerTab>Repositories</ContainerTab>
        <ContainerTab>Starred</ContainerTab>
      </ContainerTabList>

      <ContainerTabPanel>
        {repositories.map(({ id, name, full_name, html_url }) => (
          <RepositoryItem
            key={id}
            name={name}
            fullName={full_name}
            linkToRepo={html_url}
          />
        ))}
      </ContainerTabPanel>

      <ContainerTabPanel>
        {starred.map(({ id, name, full_name, html_url }) => (
          <RepositoryItem
            key={id}
            name={name}
            fullName={full_name}
            linkToRepo={html_url}
            color
          />
        ))}
      </ContainerTabPanel>
    </ContainerTabs>
  );
};

export default Repositories;
