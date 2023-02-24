import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "../headerNav/HeaderNav";
import LandingPage from "../landingPage/LandingPage";
import AllActivities from "../allActivities/AllActivities";
import ToDos from "../todo/ToDos";
import ActivityInfoView from "../activityInfoView/ActivityInfoView";
import Profile from "../profile/Profile"
import ErrorPage from "../errorPage/ErrorPage";


function App() {
  return (
    <main className="main-app">
      <HeaderNav />
			<Routes>
				<Route path='/' element={<LandingPage />}/>
				<Route path='/Activities' element={<AllActivities />}/>
				<Route path='/Saved-Activities' element={<ToDos />} />
				<Route path='/Activities/:id' element={<ActivityInfoView />}/>
        <Route path='/Profile' element={<Profile />}/>
				<Route path='*' element={<ErrorPage />}/>
			</Routes>
    </main>
  );
}

export default App;
