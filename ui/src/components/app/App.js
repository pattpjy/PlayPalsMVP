import './App.scss';
import React from "react";
import HeaderNav from "./components/HeaderNav";
import LandingPage from "./components/LandingPage";
import AllActivities from "./components/AllActivities";
import ToDos from "./components/ToDos";
import ActivityInfo from "./components/ActivityInfo";

function App() {
  return (
    <main>
      <HeaderNav />
      <LandingPage />
      <AllActivities />
      <ToDos />
      <ActivityInfo />
    </main>
  );
}

export default App;
