// core
import React from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: '100vh'
  },
}));


const Preloader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CircularProgress style={{color: "#185abc"}} />
    </div>
  );
}
export default Preloader;