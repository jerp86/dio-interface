import React from "react";

import Header from "../Header";

import { ContainerLayout } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ContainerLayout>
      <Header />
      {children}
    </ContainerLayout>
  );
};

export default Layout;
