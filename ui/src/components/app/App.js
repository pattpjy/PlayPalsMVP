import "./App.scss";
import activitiesData from "../../apiCalls/dummyData";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "../headerNav/HeaderNav";
import LandingPage from "../landingPage/LandingPage";
import AllActivities from "../allActivities/AllActivities";
import ToDos from "../todo/ToDos";
import OneActivityView from "../oneActivityView/OneActivityView";
import Profile from "../profile/Profile"
import ErrorPage from "../errorPage/ErrorPage";


function App() {
	const [activities, setActivityData] = useState(activitiesData.activities);
	console.log("App activities", activities)
	//allActivityData, function

	//Pass down these functions and have toggle add/spread in selections. State of filtered/favorites/to-do will be here.
	//filtered favorites, favorites function ...favorites (heart)
	const [favorites, setFavorites] = useState([]);

	//filtered to-do (bookmark)
	const [savedActivities, setSavedActivities] = useState([]);

	//filtered finished, for profile/resume calculations (and possible third emoji on AllActivities list?)
	const [finishedActivities, setFinishedActivities] = useState([]);
  return (
    <main className="main-app">
      <HeaderNav />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/Activities' element={<AllActivities activities={activities} />} />
				<Route path='/Saved-Activities' element={<ToDos savedActivities={savedActivities} />} />
				<Route path='/Activities/:id' element={<OneActivityView />} />
        		<Route path='/Profile' element={<Profile finishedActivities={finishedActivities} />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
    </main>
  );
}

export default App;
