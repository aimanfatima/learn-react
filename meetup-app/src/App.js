import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUpsPage from "./pages/AllMeetUps";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetups" >
          <NewMeetup />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
