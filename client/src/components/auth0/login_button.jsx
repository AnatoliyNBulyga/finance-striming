import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button 
        onClick={ loginWithRedirect } 
        variant="contained" 
        style={{ backgroundColor: "#185abc", color: "white" }}
        size="medium" >Log in
    </Button>
  );
};

export default LoginButton;