import styled from "styled-components";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { pxToRem } from "../../utils";

export const ContainerTabs = styled(Tabs)`
  font-size: ${pxToRem(16)};
  width: 100%;
  margin-top: ${pxToRem(16)};
`;

export const ContainerTabList = styled(TabList)`
  list-style-type: none;
  padding: ${pxToRem(4)};
  display: flex;
  margin: 0;
`;

export const ContainerTab = styled(Tab)`
  border-radius: ${pxToRem(16)};
  border: 1px solid #ccc;
  padding: ${pxToRem(16)};
  user-select: none;
  cursor: pointer;
  margin: ${pxToRem(4)};

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: ${pxToRem(3)} ${pxToRem(2)} ${pxToRem(10)} rgba(0, 0, 0, 0.2);
  }
`;

export const ContainerTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: ${pxToRem(16)};
  margin-top: ${pxToRem(-5)};

  &.is-selected {
    display: block;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
