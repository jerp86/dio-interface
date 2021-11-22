import React from "react";

import { useGithub } from "../../hooks";

import {
  Container,
  ContainerInfoUser,
  ContainerStatusCount,
  ContainerUserName,
  WrapperImage,
} from "./styles";

const Profile: React.FC = () => {
  const { user } = useGithub();

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <WrapperImage src={user?.avatar_url} alt="Avatar of user" />

      <ContainerInfoUser>
        <div>
          <h1>{user?.name}</h1>

          <ContainerUserName>
            <h3>Username: </h3>
            <a href={user?.html_url} target="_blank" rel="noreferrer">
              {user?.login}
            </a>
          </ContainerUserName>
        </div>

        <ContainerStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{user?.followers}</span>
          </div>

          <div>
            <h4>Followings</h4>
            <span>{user?.following}</span>
          </div>

          <div>
            <h4>Gists</h4>
            <span>{user?.public_gists}</span>
          </div>

          <div>
            <h4>Repos</h4>
            <span>{user?.public_repos}</span>
          </div>
        </ContainerStatusCount>
      </ContainerInfoUser>
    </Container>
  );
};

export default Profile;
