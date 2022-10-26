import ListLinkItem from "./components/ListLinkItem";
import ProfileContainer from "./components/ProfileContainer";
import './App.css';
import React from "react";
import CoverImage from "./components/CoverImage";
import Spotlight from "./components/Spotlight";
import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <ProfileContainer></ProfileContainer>
//       <ListLinkItem linkType="ghR" link="https://github.com/csvidit" linkText="csvidit"></ListLinkItem>
//       <ListLinkItem linkType="ghR" link="https://github.com/csvidit" linkText="csvidit"></ListLinkItem>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App bg-fixed">
        <div className="flex flex-col items-center snap-y bg-fixed">
          <CoverImage></CoverImage>
          <ProfileContainer></ProfileContainer>
          <Spotlight></Spotlight>
          <ListLinkItem linkType="ghR" link="https://github.com/csvidit" linkText="csvidit"></ListLinkItem>
          <ListLinkItem linkType="ghR" link="https://github.com/csvidit" linkText="csvidit"></ListLinkItem>
          <ListLinkItem linkType="litP" link="https://github.com/csvidit" linkText="MMXXII"></ListLinkItem>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;