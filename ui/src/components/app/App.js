import './App.scss';
import React from "react";
import HeaderNav from "./components/HeaderNav";
import LandingPage from "./components/LandingPage";
import AllActivities from "./components/AllActivities";
import Favorites from "./components/Favorites";
import ActivityInfo from "./components/ActivityInfo";

function App() {
  return (
    <main>
      <HeaderNav />
      <LandingPage />
      <AllActivities />
      <Favorites />
      <ActivityInfo />
    </main>
  );
}

export default App;
