// import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      {/* <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore React'/> */}
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetupPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritePage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
