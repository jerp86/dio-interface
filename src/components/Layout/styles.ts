import styled from "styled-components";

import { pxToRem } from "../../utils";

export const ContainerLayout = styled.section`
  margin: ${pxToRem(16)} auto;
  max-width: 960px;

  & > img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${pxToRem(32)} auto;
    width: fit-content;
    height: ${pxToRem(100)};
  }

  @media only screen and (max-width: 600px) {
    margin: ${pxToRem(8)} auto;
  }
`;
