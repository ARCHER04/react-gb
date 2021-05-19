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
import { ConnectedProfile as Profile } from './components/Profile';


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

