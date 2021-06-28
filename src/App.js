import React from "react";
import { Icon, Grid, Container } from "semantic-ui-react";
import styled from "styled-components";

import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <Grid centered textAlign={"center"} verticalAlign={"middle"}>
      <HeroSection />
    </Grid>
  );
}

export default App;
