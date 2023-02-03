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
import { BsArrowUpRight } from "react-icons/bs";
import LoginFooter from "./components/LoginFooter";
import Footer2 from "./components/Footer2"

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div className="App bg-fixed">
          <div className="flex snap-y flex-col items-center bg-fixed">
            <CoverImage></CoverImage>
            <ProfileContainer></ProfileContainer>
            <Spotlight title="COMING SOON">
              <p>
                A series of analyses on three C.S. Lewis books, on my{" "}
                <a
                  href="https://acad.viditkhandelwal.com"
                  target="_blank"
                  className="inline text-white underline decoration-sky-500 hover:text-slate-300" rel="noreferrer"
                >
                  academic papers
                  <BsArrowUpRight className="inline self-center text-sky-500" />
                </a>{" "}
                domain
              </p>
            </Spotlight>
            <ListLinkItems></ListLinkItems>
            {/* <Footer>
              <Profile />
            </Footer> */}
            <Footer2/>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
