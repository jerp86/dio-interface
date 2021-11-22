import React from "react";

import { Container } from "./styles";

type IRepositoryProps = {
  name: string;
  fullName: string;
  linkToRepo: string;
  color?: boolean;
};

const RepositoryItem = (props: IRepositoryProps): JSX.Element => {
  const { fullName, linkToRepo, name, color = false } = props;

  return (
    <Container color={color ? "darkGoldenRod" : "black"}>
      <h2>
        {name} {color && "🌟"}
      </h2>
      <h4>
        full name:{" "}
        <a href={linkToRepo} target="_blank" rel="noreferrer">
          {fullName}
        </a>
      </h4>
    </Container>
  );
};

export default RepositoryItem;
