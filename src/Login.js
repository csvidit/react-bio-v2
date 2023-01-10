import React from "react";
import AuthTitle from "./components/AuthTitle";
import LoginFooter from "./components/LoginFooter";
import LoginForm from "./components/LoginForm";
import { useAuth0 } from "@auth0/auth0-react";

class Login extends React.Component {
  render() {
    return (
      <div className="h-screen w-screen flex flex-col">
        <div className="flex w-full h-full self-center flex-col items-center justify-center">
          <AuthTitle></AuthTitle>
          <LoginForm></LoginForm>
        </div>
        <div className="flex w-full justify-center self-center border-t border-slate-600 bg-slate-900 pl-5 pr-5 pt-2 pb-2"><LoginFooter></LoginFooter></div>
      </div>
    );
  }
}

// const Login = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

export default Login;
