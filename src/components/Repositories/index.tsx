import React from "react";
import RepositoryItem from "../RepositoryItem";

import {
  ContainerTab,
  ContainerTabList,
  ContainerTabPanel,
  ContainerTabs,
} from "./styles";

const Repositories: React.FC = () => {
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
        <RepositoryItem
          name="dio-cep"
          fullName="jerp86/dio-cep"
          linkToRepo="https://github.com/jerp86/dio-cep"
        />
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
