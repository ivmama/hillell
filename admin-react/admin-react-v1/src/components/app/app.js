import { Route, Switch } from "react-router-dom";
import { HomePage, UsersPage, AboutPage } from "../pages"
import Header from "../header";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/users">
          <UsersPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
