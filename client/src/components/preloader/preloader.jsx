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
    minHeight: "calc(100vh - 300px)",
    position: "fixed",
    zIndex: 10,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#f8f9fa"
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