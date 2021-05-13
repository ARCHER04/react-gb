import React from "react";
import './style.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import { ChatList } from "./components/ChatList";

const Profile = ({ routerProp }) => {
  return <div>Yes , it is profile</div>;
};

export const Routes = () => {
  return (
    <BrowserRouter>
      <ul className="header">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

        <div className="sidebar">
            <ChatList />
        </div>
        
      <Switch>
        <Route path="/" exact>
        <ChatList />
        </Route>
        <Route path="/chats/:chatId" exact>
         <App />
        </Route>
        <Route
          path="/profile"
          render={(obj) => <Profile routerProp={obj} />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

