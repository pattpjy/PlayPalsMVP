import './App.scss';
import React from "react";
import HeaderNav from "../headerNav/HeaderNav";
import LandingPage from "../landingPage/LandingPage";
import AllActivities from "../allActivities/AllActivities";
import ToDos from "../todo/ToDos";
import ActivityInfoView from "../activityInfoView/ActivityInfoView";

function App() {
  return (
    <main>
      <HeaderNav />
      {/* <LandingPage />
      <AllActivities />
      <ToDos />
      <ActivityInfoView /> */}
    </main>
  );
}

export default App;
