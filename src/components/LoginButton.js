import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () =>
{
    const { loginWithRedirect } = useAuth0();

  return <button className="text-center text-white underline decoration-sky-500 hover:text-slate-300" onClick={() => loginWithRedirect()}>Log In</button>;
}

export default LoginButton;