import React from "react";
import "./AllActivities.scss";
import Filter from "./Filter.js";
import ActivityCard from "./ActivityCard.js";

export default function AllActivities() {
    return (
        <section className="all-activities-section">
            <Filter />
            <ActivityCard />
        </section>
    );
}