// core
import React from "react";
// material-ui 
import Grid from '@material-ui/core/Grid';
// styles
import "./footer.scss";

const Footer = () => {
    return (
      <footer className="wrap footer">
        <div className="footer__inner">
            <Grid container spacing={2}>
              <Grid item xs>
                <div>Copyright © 2021 Finance Striming and its affiliates and licensors.</div>
              </Grid>
            </Grid>
        </div>
      </footer> 
    );
}

export default React.memo(Footer);