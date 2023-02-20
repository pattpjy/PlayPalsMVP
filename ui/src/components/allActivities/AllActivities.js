import React from "react";
import "./AllActivities.scss";
import Filter from "../filter/Filter";
import ActivityCard from "../thumbnailActivity/ActivityCard";
import activitiesData from "../../apiCall/dummyData";

export default function AllActivities() {
  const activityOptions = Object.keys(activitiesData.activities[0]);
  return (
    <section className="all-activities-section">
      <p>this is all activities</p>
      <Filter isMulti placeHolder="Select..." options={activityOptions} />
      {/* <ActivityCard /> */}
    </section>
  );
}
