import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllQts from "./AllQts";
import RandomQt from "./RandomQt";
import Footer from "./Footer";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:quotes">
          <AllQts />
        </Route>
        <Route path="/">
          <RandomQt />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
