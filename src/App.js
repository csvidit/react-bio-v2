import ListLinkItem from "./components/ListLinkItem";
import ProfileContainer from "./components/ProfileContainer";
import './App.css';
import React from "react";
import CoverImage from "./components/CoverImage";

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
      <div className="App main-body bg-fixed">
        <div className="flex flex-col items-center snap-y bg-fixed">
          <CoverImage></CoverImage>
          <ProfileContainer></ProfileContainer>
          <ListLinkItem linkType="ghR" link="https://github.com/csvidit" linkText="csvidit"></ListLinkItem>
          <ListLinkItem linkType="ghR" link="https://github.com/csvidit" linkText="csvidit"></ListLinkItem>
          <ListLinkItem linkType="litP" link="https://github.com/csvidit" linkText="MMXXII"></ListLinkItem>
        </div>
      </div>
    );
  }
}

export default App;