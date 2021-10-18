import { Layout, Profile } from "./components";

const App = () => {
  return (
    <main>
      <Layout>
        <Profile />

        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
};

export default App;
