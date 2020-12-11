import React from "react";
import { SolarSystemLoading } from 'react-loadingg';
import "./App.css";
import Globe from "./pages/Globe";


function App() {
  return (
   
      <div className="App">
        <SolarSystemLoading />
        <Globe />
      </div>

  );
}

export default App;
