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
            <ListLinkItems></ListLinkItems>
            <Footer></Footer>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
