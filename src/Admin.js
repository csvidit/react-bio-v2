import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/LogoutButton";

const Admin = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-xl text-white">Loading ...</div>;
  }

  return (
    isAuthenticated &&
    <div className="text-6xl text-xl text-white" id="admin">
      <p>ADMIN</p>
      <LogoutButton></LogoutButton>
    </div>
  );
};

export default Admin;
