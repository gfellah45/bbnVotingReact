import React from "react";
import "./assets/scss/app.scss";

import Voting from "./components/Voting";

export default function App() {
  return (
    <div className="home">
      <Voting />
    </div>
  );
}
