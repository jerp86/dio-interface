import React from "react";

import { ContainerLayout } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ContainerLayout>
      <header>Header</header>
      {children}
    </ContainerLayout>
  );
};

export default Layout;
