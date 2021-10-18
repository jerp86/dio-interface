import { Layout, Profile, Repositories } from "./components";
import { ResetCSS } from "./global";

const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />

        <Repositories />
      </Layout>
    </main>
  );
};

export default App;
