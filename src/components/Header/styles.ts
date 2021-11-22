import styled from "styled-components";
import { pxToRem } from "../../utils";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${pxToRem(4)};
  margin-bottom: ${pxToRem(32)};

  input {
    width: 100%;
    height: ${pxToRem(44)};
    border: 1px solid #ccc;
    border-radius: ${pxToRem(8)};
    padding: ${pxToRem(8)};
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: ${pxToRem(8)} ${pxToRem(16)};
    margin: 0 ${pxToRem(16)};
    border-radius: ${pxToRem(8)};

    &:hover {
      background-color: #2c5282;
      box-shadow: ${pxToRem(3)} ${pxToRem(2)} ${pxToRem(10)} rgba(0, 0, 0, 0.2);
    }

    span {
      color: #fff;
      font-weight: bold;
      font-size: ${pxToRem(16)};
    }
  }
`;
