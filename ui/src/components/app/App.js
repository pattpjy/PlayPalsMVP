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

  
  //Pass down these functions and have toggle add/spread in selections. State of filtered/favorites/to-do will be here.
  //filtered favorites, favorites function ...favorites (heart)
  const [favorites, setFavorites] = useState([]);
  
  //filtered to-do (bookmark)
  const [savedActivities, setSavedActivities] = useState([]);
  console.log("savedActivities: ", savedActivities)
  //filtered finished, for profile/resume calculations (and possible third emoji on AllActivities list?)
  const [finishedActivities, setFinishedActivities] = useState([]);

  //ApiCall-->KEEP BELOW STATE
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllActivities();
      setActivityData(data);
    };
    fetchData();
  }, []);

  // function addToSavedActivities(grabbedId) {
  //   const savedActivity = activities.find(activity => activity.id === grabbedId)
  
  //   setSavedActivities(prevState => [...prevState, savedActivity]);
  // }

  return (
    <main className="main-app">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/Activities"
          element={<AllActivities activities={activities} setSavedActivities={setSavedActivities}/>}
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
