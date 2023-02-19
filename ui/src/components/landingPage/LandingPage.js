import React from "react";
import "./LandingPage.scss";

export default function LandingPage() {
    return (
        <section className="landing">
            <p>Hi Patt! Let's play with Maddie!</p>
            <button className="find">Find a New Activity</button>
            <button className="go">Go to Saved Activities</button>
        </section>
    );
}