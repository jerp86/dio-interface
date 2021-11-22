import { NoSearch, Profile, Repositories } from "./components";
import { useGithub } from "./hooks";

const App = () => {
  const { githubState } = useGithub();

  if (githubState.loading) {
    return <h1>Loading...</h1>;
  }

  if (!githubState.hasUser) {
    return <NoSearch />;
  }

  return (
    <>
      <Profile />
      <Repositories />
    </>
  );
};

export default App;
