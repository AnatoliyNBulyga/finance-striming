// core
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
// auth0
import { useAuth0 } from '@auth0/auth0-react';
// animation
import { gsap } from "gsap";
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// components
import LoginButton from "components/auth0/login_button";
import SignUpButton from "components/auth0/signup_button";
import Preloader from "components/preloader/preloader";
// material-ui
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 450,
      marginTop: 100,
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      padding: 30,
      [theme.breakpoints.down(480)]: {
        marginLeft: 15,
        marginRight: 15,
      },
    },
    title: {
      fontSize: 24
    },
    bodyText: {
        marginTop: 10
    },
    action: {
        paddingTop: 10,
        justifyContent: 'center'
    }
}));

const Public = () => {
    // material-ui
    const classes = useStyles();
    // auth0
    const { isAuthenticated, isLoading } = useAuth0();
    // hooks
    useEffect( () => {
        gsap.from(".authorize", {duration: 1, opacity: 0, delay: 0.5}); // animation on load app
    }, []);

    // preloader before loading auth0 data
    if (isLoading) return <Preloader />; 
    return (
        // if user is authenticated don't display this page
        isAuthenticated
        ? <Redirect to="/private" exact />
        // if user isn't login then display this page
        : (
            <main className="content">
                <Card className={`authorize ${classes.root}`}>
                    <CardContent>
                        <Typography variant="h1" component="h1" className={classes.title}>
                            Welcome
                        </Typography>
                        <Typography variant="body2" className={classes.bodyText} gutterBottom>
                            Please <span className="bold">Log in</span> or <span className="bold">Sign up</span> to application
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.action}>
                        <LoginButton />
                        <SignUpButton />
                    </CardActions>
                </Card>
            </main> 
        )
    );
}

export default Public;