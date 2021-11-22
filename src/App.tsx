import { Layout, Profile, Repositories } from "./components";
import { ResetCSS } from "./global";
import { GithubProvider } from "./providers";

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />

          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
};

export default App;
