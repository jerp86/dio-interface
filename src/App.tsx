import { Layout, Profile } from "./components";
import { ResetCSS } from "./global";

const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />

        <div>Repositories</div>
        <div>Starred</div>
      </Layout>
    </main>
  );
};

export default App;
