import ListLinkItem from "./components/ListLinkItem";
import ProfileContainer from "./components/ProfileContainer";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfileContainer></ProfileContainer>
      <ListLinkItem linkType="ghR" link="https://github.com/csvidit" linkText="csvidit"></ListLinkItem>
      <ListLinkItem linkType="ghR" link="https://github.com/csvidit" linkText="csvidit"></ListLinkItem>
    </div>
  );
}

export default App;