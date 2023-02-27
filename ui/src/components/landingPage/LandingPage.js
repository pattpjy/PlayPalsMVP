import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";


export default function LandingPage() {
    let navigate = useNavigate()

    return (
        <section className="landing">
            <section className="call-to-action">
                <p className="hello-p">Hi Patt!</p>
                <p className="hello-p">Let's play with Maddie!</p>
            </section>
            <div className="button-box">
                <button className="find" onClick={() => navigate("/Activities")} >Find a New Activity</button>
                <button className="go" onClick={() => navigate("/Saved-Activities")} >Go to Saved Activities</button>
            </div>
        </section>
    );
}