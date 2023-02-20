import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "../headerNav/HeaderNav";
import LandingPage from "../landingPage/LandingPage";
import AllActivities from "../allActivities/AllActivities";
import ToDos from "../todo/ToDos";
import ActivityInfoView from "../activityInfoView/ActivityInfoView";
import ErrorPage from "../errorPage/ErrorPage";

function App() {

  return (
    <main className="main-app">
      <HeaderNav />
			<Routes>
				<Route path='/' element={<LandingPage />}/>
				<Route path='/AllActivities' element={<AllActivities />}/>
				<Route path='/ToDos' element={<ToDos />} />
				<Route path='/ActivityInfoView' element={<ActivityInfoView />}/>
				<Route path='*' element={<ErrorPage />}/>
			</Routes>
      <section className="trying-out-colors">
        <p className="cherry">&nbsp;cherry&nbsp;</p>
        <p className="intense-pink">intensePink&nbsp;</p>
        <p className="red">red&nbsp;</p>
        <p className="blueberry">blueberry&nbsp;</p>
        <p className="purpleberry">purpleberry&nbsp;</p>
        <p className="candy">candy&nbsp;</p>
        <p className="light-pink-purple">lightPinkPurple&nbsp;</p>
        <p className="light-lavendar">lightLavendar&nbsp;</p>
        <p className="ocean">ocean&nbsp;</p>
        <p className="teal">teal&nbsp;</p>
        <p className="light-blue">lightBlue&nbsp;</p>
        <p className="pink">pink&nbsp;</p>
      </section>
    </main>
  );
}

export default App;
