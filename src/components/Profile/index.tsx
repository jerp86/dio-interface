import React from "react";

import { useGithub } from "../../hooks";

import {
  Container,
  ContainerInfoUser,
  ContainerStatusCount,
  ContainerUserDetail,
  WrapperImage,
} from "./styles";

const Profile: React.FC = () => {
  const { githubState } = useGithub();
  const { user } = githubState;

  return (
    <Container>
      <WrapperImage src={user?.avatar_url} alt="Avatar of user" />

      <ContainerInfoUser>
        <div>
          <h1>{user?.name}</h1>

          <ContainerUserDetail>
            <h3>Username:</h3>
            <a href={user?.html_url} target="_blank" rel="noreferrer">
              {user?.login}
            </a>
          </ContainerUserDetail>

          <ContainerUserDetail>
            <h3>Company:</h3>
            <span>{user?.company}</span>
          </ContainerUserDetail>

          <ContainerUserDetail>
            <h3>Location:</h3>
            <span>{user?.location}</span>
          </ContainerUserDetail>

          <ContainerUserDetail>
            <h3>Blog:</h3>
            <a href={user?.blog} target="_blank" rel="noreferrer">
              {user?.blog}
            </a>
          </ContainerUserDetail>
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
