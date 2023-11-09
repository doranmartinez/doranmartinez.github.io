import { Component } from "react";
import Footer from "./Footer";
import LeftPane from "./LeftPane"
import RightPane from "./RightPane";
import sharedData from "/app/public/portfolio_shared_data.json";

import Grid from "@mui/material/Grid"

class Layout extends Component{
  render() {
    return (
      <div>
        <div>
          <Grid container spacing={2} columns={{ xs: 1, sm: 8, md: 12 }}>
            <Grid item sm={4}>
              <LeftPane sharedData={sharedData} />
            </Grid>
            <Grid item xs={3}>
              <RightPane sharedData={sharedData} />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
