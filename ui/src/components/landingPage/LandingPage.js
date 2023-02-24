import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";

export default function LandingPage() {
    let navigate = useNavigate()

    return (
        <section className="landing">
            <p className="hello-message">Hi Patt! Let's play with Maddie!</p>
            <button className="find" onClick={() => navigate("/Activities")} >Find a New Activity</button>
            <button className="go" onClick={() => navigate("/Saved-Activities")} >Go to Saved Activities</button>
        </section>
    );
}