import ListLinkItems from "./components/ListLinkItems";
import ProfileContainer from "./components/ProfileContainer";
import "./App.css";
import React from "react";
import CoverImage from "./components/CoverImage";
import Spotlight from "./components/Spotlight";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Admin from "./Admin";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div className="App bg-fixed">
          <div className="flex snap-y flex-col items-center bg-fixed">
            <CoverImage></CoverImage>
            <ProfileContainer></ProfileContainer>
            <Spotlight></Spotlight>
            <ListLinkItems></ListLinkItems>
            <Footer>
              <LoginButton />
              <Profile />
            </Footer>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
