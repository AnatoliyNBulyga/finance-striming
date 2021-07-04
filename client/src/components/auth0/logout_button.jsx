import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { HOME_URL } from "config.js";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const logoutHandler = () => {
    logout({ returnTo: HOME_URL });
  }

  return (
    <span onClick={ logoutHandler }>Log Out</span>
  );
};

export default LogoutButton;