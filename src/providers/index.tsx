import React from "react";

import App from "../App";
import { Layout } from "../components";
import { ResetCSS } from "../global";
import GithubProvider from "./githubProvider";

const Providers: React.FC = ({ children }) => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <App />
        </Layout>
      </GithubProvider>
    </main>
  );
};

export default Providers;

export * from "./githubProvider";
export { default as GithubProvider } from "./githubProvider";
