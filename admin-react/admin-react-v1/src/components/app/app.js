import { Route } from "react-router-dom";
import Header from "../header";
const App = () => {
  return (
    <>
      <Header />;
      <Route path="/">
        {/* <Home></Home> */}
      </Route>
    </>
  );
};

export default App;
