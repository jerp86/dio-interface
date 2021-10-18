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

  h3 {
    margin-right: ${pxToRem(8)};
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: ${pxToRem(200)};
  margin: ${pxToRem(8)};
`;
