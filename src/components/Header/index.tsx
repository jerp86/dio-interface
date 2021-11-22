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

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Digite o Username para pesquisa..."
        value={usernameForSearch}
        onChange={(evt) => setUsernameForSearch(evt.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        <span>Buscar</span>
      </button>
    </Wrapper>
  );
};

export default Header;
