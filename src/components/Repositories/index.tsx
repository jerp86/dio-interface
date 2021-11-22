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
  const { getRepos, githubState } = useGithub();
  const { user, repositories } = githubState;

  useEffect(() => {
    if (user.login) {
      getRepos();
    }
  }, [user.login]);

  if (!repositories) {
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
        <RepositoryItem
          name="dio-typescript"
          fullName="jerp86/dio-typescript"
          linkToRepo="https://github.com/jerp86/dio-typescript"
        />
      </ContainerTabPanel>
    </ContainerTabs>
  );
};

export default Repositories;
