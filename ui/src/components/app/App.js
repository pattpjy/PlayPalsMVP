import './App.scss';
import React from "react";
import {Routes, Route} from "react-router-dom"
import HeaderNav from "../headerNav/HeaderNav";
import LandingPage from "../landingPage/LandingPage";
import AllActivities from "../allActivities/AllActivities";
import ToDos from "../todo/ToDos";
import ActivityInfoView from "../activityInfoView/ActivityInfoView";
import { Form } from 'react-router-dom';

function App() {
  return (
    <main>
      <HeaderNav />
			<Routes>
				<Route path='/' element={<LandingPage />}/>
				<Route path='/AllActivities' element={<AllActivities />}/>
				<Route path='/ToDos' element={<ToDos />} />
				<Route path='/ActivityInfoView' element={<ActivityInfoView />}/>
				{/* <Route path='*' element={<ErrorPage />}/> */}
			</Routes>
    </main>
  );
}

export default App;
