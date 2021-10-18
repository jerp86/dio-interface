import React from "react";

// import { Container } from './styles';

type IRepositoryProps = {
  name: string;
  fullName: string;
  linkToRepo: string;
};

const RepositoryItem = (props: IRepositoryProps): JSX.Element => {
  const { fullName, linkToRepo, name } = props;

  return (
    <div>
      <h2>{name}</h2>
      <h4>full name:</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </div>
  );
};

export default RepositoryItem;
