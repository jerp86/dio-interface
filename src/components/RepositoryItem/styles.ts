import styled from "styled-components";
import { pxToRem } from "../../utils";

export const Container = styled.div`
  margin: ${pxToRem(8)} ${pxToRem(4)};
  padding: ${pxToRem(8)};
  border: 1px solid #ccc;
  border-radius: ${pxToRem(8)};
  min-width: ${pxToRem(200)};
  min-height: ${pxToRem(100)};

  h2 {
    font-weight: 500;
    font-size: ${pxToRem(18)};
    color: ${({ color }) => color};
  }

  a {
    color: #3182ce;
  }
`;
