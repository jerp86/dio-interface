import React from "react";

import { ContainerTab, ContainerTabList, ContainerTabs } from "./styles";

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
    </ContainerTabs>
  );
};

export default Repositories;
