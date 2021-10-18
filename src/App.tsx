import { Layout } from "./components";

const App = () => {
  return (
    <main>
      <Layout>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/54115624?v=4"
            alt="Avatar of user"
          />
          <h1>José Eduardo Rodrigues Pinto</h1>
          <h3>Username: </h3>
          <span>jerp86</span>

          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>

          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>

          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
};

export default App;
