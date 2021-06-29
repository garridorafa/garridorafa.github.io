import React from "react";
import { Grid } from "semantic-ui-react";

import HeroSection from "./Components/HeroSection";
import SkillsSection from "./Components/SkillsSection";

function App() {
  return (
    <Grid centered textAlign="center" verticalAlign="middle">
      <HeroSection />
      <SkillsSection />
    </Grid>
  );
}

export default App;
