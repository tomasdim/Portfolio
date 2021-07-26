import React from "react";
import Presentation from "../components/Presentation";
import Works from "../components/Works";
import Fun from "../components/Fun";
import Inquiry from "../components/Inquiry";
import ButtonAppBar from "../components/AppBar";

function Home() {
  return (
    <div>
      <ButtonAppBar />
      <Presentation />
      <Works />
      <Fun />
      <Inquiry />
    </div>
  );
}

export default Home;
