import React from "react";
import { Grid } from "semantic-ui-react";

import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <Grid centered textAlign={"center"} verticalAlign={"middle"}>
      <HeroSection />
    </Grid>
  );
}

export default App;
