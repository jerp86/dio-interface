import React from "react";

import {
  Container,
  ContainerInfoUser,
  ContainerStatusCount,
  ContainerUserName,
  WrapperImage,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <WrapperImage
        src="https://avatars.githubusercontent.com/u/54115624?v=4"
        alt="Avatar of user"
        loading="lazy"
      />

      <ContainerInfoUser>
        <div>
          <h1>José Eduardo Rodrigues Pinto</h1>

          <ContainerUserName>
            <h3>Username: </h3>
            <a
              href="https://github.com/jerp86"
              target="_blank"
              rel="noreferrer"
            >
              jerp86
            </a>
          </ContainerUserName>
        </div>

        <ContainerStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>

          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>

          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
        </ContainerStatusCount>
      </ContainerInfoUser>
    </Container>
  );
};

export default Profile;
