import React, {} from "react";
import { BrowserRouter, Switch,  Route } from "react-router-dom";
import App from "./components/App";
import { Header } from "./components/Header";
import { ConnectedProfile as Profile } from './components/Profile';


export const Routes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact>
 
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/chats/:chatId?">
          <App />
        </Route>

        <Route path="*">
          <div>This is my 404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};