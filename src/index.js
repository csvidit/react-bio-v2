import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Admin from "./Admin";
import {createRoot} from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);

// ReactDOM.render(
//   <Auth0Provider
//     domain={process.env.REACT_APP_AUTH0_DOMAIN}
//     clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
//     redirectUri="https://bio.viditkhandelwal.com/admin"
//   >
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/admin" element={<Admin />}></Route>
//       </Routes>
//     </BrowserRouter>
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );

reportWebVitals(sendToVercelAnalytics);
