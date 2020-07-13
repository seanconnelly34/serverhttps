import React from "react";
import { Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="footer"
    >
      <p className="footerp">©2007 - 2020 The Landings Surgical Centre </p>
    </Grid>
  );
};

export default Footer;
