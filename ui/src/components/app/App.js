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
	//I've passed down 'setActivityData' function to AllActivities.js, but not sure how this is working?
	console.log("App activities", activities)
	//allActivityData, function
	//favorites, favorites function ...favorites
	//to-do
  return (
    <main className="main-app">
      <HeaderNav />
			<Routes>
				<Route path='/' element={<LandingPage />}/>
				<Route path='/Activities' element={<AllActivities activities={activities}/>}/>
				<Route path='/Saved-Activities' element={<ToDos />} />
				<Route path='/Activities/:id' element={<OneActivityView />}/>
        		<Route path='/Profile' element={<Profile />}/>
				<Route path='*' element={<ErrorPage />}/>
			</Routes>
    </main>
  );
}

export default App;
