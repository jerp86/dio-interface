import styled from "styled-components";
import { pxToRem } from "../../utils";

export const Container = styled.div`
  margin: ${pxToRem(8)} ${pxToRem(4)};
  padding: ${pxToRem(8)};
  border: 1px solid #ccc;
  border-radius: ${pxToRem(8)};
  width: fit-content;
  min-height: ${pxToRem(70)};

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: 500;
    color: ${({ color }) => color};
  }
`;
