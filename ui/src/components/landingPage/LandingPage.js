import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";

export default function LandingPage() {
    let navigate = useNavigate()
    return (
        <section className="landing">
            <p>Hi Patt! Let's play with Maddie!</p>
            <button className="find" onClick={() => navigate("/AllActivities")} >Find a New Activity</button>
            <button className="go" onClick={() => navigate("/ToDos")} >Go to Saved Activities</button>
        </section>
    );
}