import ListLinkItem from "./components/ListLinkItem";
import ListLinkItems from "./components/ListLinkItems";
import ProfileContainer from "./components/ProfileContainer";
import "./App.css";
import React from "react";
import CoverImage from "./components/CoverImage";
import Spotlight from "./components/Spotlight";
import Footer from "./components/Footer";
import { getDatabase, ref, onValue, getData } from "firebase/database";
import { Suspense, useEffect, useState } from "react";
import { db } from "./firebase";

class App extends React.Component {
  render() {
    // const db = getDatabase();
    // const data = ref(getDatabase, "vk-bio-default-rtdb");
    // onValue(data, (snapshot) => {
    //   console.log([snapshot.val()]);
    // });
    // useEffect(() => {
    //   getData();
    // });
    return (
      <React.StrictMode>
        <div className="App bg-fixed">
          <div className="flex snap-y flex-col items-center bg-fixed">
            <CoverImage></CoverImage>
            <ProfileContainer></ProfileContainer>
            <Spotlight></Spotlight>
            {/* <ListLinkItem
              linkType="ghR"
              link="https://github.com/csvidit/react-bio-v2"
              linkText="react-bio-v2"
            ></ListLinkItem>
            <ListLinkItem
              linkType="ghR"
              link="https://github.com/csvidit/nextjs-main-landing"
              linkText="nextjs-main-landing"
            >
              l
            </ListLinkItem>
            <ListLinkItem
              linkType="ghR"
              link="https://github.com/csvidit/bio-v2"
              linkText="bio-v2"
            ></ListLinkItem>
            <ListLinkItem
              linkType="litP"
              link="https://github.com/csvidit"
              linkText="MMXXII"
            ></ListLinkItem> */}
            <ListLinkItems></ListLinkItems>
            <Footer></Footer>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
