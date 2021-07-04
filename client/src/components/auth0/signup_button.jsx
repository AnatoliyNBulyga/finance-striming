import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button  
      color="primary"
      style={{color: "rgba(0, 0, 0, 0.87)", marginLeft: 10}}
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;