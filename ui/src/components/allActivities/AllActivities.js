import React from "react";
import "./AllActivities.scss";
import Filter from "../filter/Filter";
import ActivityCard from "../thumbnailActivity/ActivityCard";

export default function AllActivities() {
    return (
        <section className="all-activities-section">
            <Filter />
            <ActivityCard />
        </section>
    );
}