import React, { useState } from "react";

import { useGithub } from "../../hooks";

import { Wrapper } from "./styles";

const Header: React.FC = () => {
  const [usernameForSearch, setUsernameForSearch] = useState("");
  const { getUser } = useGithub();

  const handleSubmit = () => {
    if (!usernameForSearch) return;

    getUser(usernameForSearch);
  };

  const handleKeyPress = (evt: { code: string; key: string }) => {
    if (evt.code === "Enter" || evt.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Digite o Username para pesquisa..."
        value={usernameForSearch}
        onChange={(evt) => setUsernameForSearch(evt.target.value)}
        onKeyUp={handleKeyPress}
      />
      <button type="submit" onClick={handleSubmit}>
        <span>Buscar</span>
      </button>
    </Wrapper>
  );
};

export default Header;
