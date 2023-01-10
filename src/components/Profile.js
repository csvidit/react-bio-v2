import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Profile = () =>
{
    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isAuthenticated === false)
    {
        return<div></div>
    }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <p>{user.email} is logged in</p>
        <a href="/admin"><p className="text-center text-white underline decoration-sky-500 hover:text-slate-300">
          ADMIN CONSOLE</p></a>
          <LogoutButton></LogoutButton>
      </div>
    )
  );
}

export default Profile;