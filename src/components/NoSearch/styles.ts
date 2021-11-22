import styled from "styled-components";

import { pxToRem } from "../../utils";

export const Wrapper = styled.div`
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: ${pxToRem(32)};
  }
`;
