import React from "react";

// import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <section>
      <header>Header</header>
      {children}
    </section>
  );
};

export default Layout;
