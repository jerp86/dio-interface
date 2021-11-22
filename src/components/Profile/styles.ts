import styled from "styled-components";

import { pxToRem } from "../../utils";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: ${pxToRem(8)};
  height: ${pxToRem(200)};

  h1 {
    font-size: ${pxToRem(32)};
    font-weight: bold;
  }

  h3 {
    font-size: ${pxToRem(18)};
    font-weight: bold;
  }

  h4 {
    font-size: ${pxToRem(16)};
    font-weight: bold;
  }
`;

export const ContainerStatusCount = styled.div`
  display: flex;
  align-items: flex-start;

  div {
    margin: ${pxToRem(8)};
    text-align: center;
  }
`;

export const ContainerUserName = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${pxToRem(8)};

  h3 {
    margin-right: ${pxToRem(8)};
  }

  a {
    font-size: ${pxToRem(18)};
    font-weight: bold;
    color: blue;
  }
`;

export const WrapperImage = styled.img.attrs({ loading: "lazy" })`
  border-radius: 50%;
  width: ${pxToRem(200)};
  margin: ${pxToRem(8)};
`;
