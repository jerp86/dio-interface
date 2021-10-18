import React from "react";

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

      <ContainerTabPanel>panel Repositories</ContainerTabPanel>
      <ContainerTabPanel>panel Starred</ContainerTabPanel>
    </ContainerTabs>
  );
};

export default Repositories;
