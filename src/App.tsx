import { Layout, Profile, Repositories } from "./components";
import { ResetCSS } from "./global";
import { useGithub } from "./hooks";

const App = () => {
  const { githubState } = useGithub();

  if (githubState.loading) {
    return <h1>Loading...</h1>;
  }

  if (!githubState.hasUser) {
    return <h1>Nenhum usuário pesquisado</h1>;
  }

  return (
    <>
      <Profile />
      <Repositories />
    </>
  );
};

export default App;
