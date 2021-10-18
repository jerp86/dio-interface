import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
`;

export const ContainerStatusCount = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ContainerUserName = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 8px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
