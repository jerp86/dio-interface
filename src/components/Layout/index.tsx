import React from "react";

import Header from "../Header";

import { ContainerLayout } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ContainerLayout>
      <img
        src="https://user-images.githubusercontent.com/54115624/101699995-0bd6e600-3a5b-11eb-8c2a-6c305ab1ebfe.png"
        alt="DIO logo"
        loading="lazy"
      />
      <Header />
      {children}
    </ContainerLayout>
  );
};

export default Layout;
