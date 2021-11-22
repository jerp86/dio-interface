import styled from "styled-components";
import { pxToRem } from "../../utils";

export const Container = styled.div`
  margin: ${pxToRem(8)} 0;

  h2 {
    font-weight: 500;
    color: ${({ color }) => color};
  }

  & + div {
    border-top: 1px solid #ccc;
    margin-top: ${pxToRem(8)};
    padding-top: ${pxToRem(16)};
  }
`;
