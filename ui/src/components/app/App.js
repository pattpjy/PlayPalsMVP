import "./App.scss";
import activitiesData from "../../apiCalls/dummyData";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "../headerNav/HeaderNav";
import LandingPage from "../landingPage/LandingPage";
import AllActivities from "../allActivities/AllActivities";
import ToDos from "../todo/ToDos";
import OneActivityView from "../oneActivityView/OneActivityView";
import Profile from "../profile/Profile";
import ErrorPage from "../errorPage/ErrorPage";
import { getAllActivities } from "../../apiCalls/apiCalls";

function App() {
  const [activities, setActivityData] = useState([]);

  const [favorites, setFavorites] = useState([]);
  
  //filtered to-do (bookmark)
  const [savedActivities, setSavedActivities] = useState([]);
  console.log("savedActivities in App: ", savedActivities)

  const [finishedActivities, setFinishedActivities] = useState([]);

  //ApiCall-->KEEP BELOW STATE
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllActivities();
      setActivityData(data);
    };
    fetchData();
  }, []);

  return (
    <main className="main-app">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/Activities"
          element={<AllActivities activities={activities} savedActivities={savedActivities} setSavedActivities={setSavedActivities}/>}
        />
        <Route
          path="/Saved-Activities"
          element={<ToDos savedActivities={savedActivities} setSavedActivities={setSavedActivities}/>}
        />
        <Route path="/Activities/:id" element={<OneActivityView />} />
        <Route
          path="/Profile"
          element={<Profile finishedActivities={finishedActivities} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
