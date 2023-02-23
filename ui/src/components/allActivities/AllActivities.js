import React, { useState } from "react";
import "./AllActivities.scss";
import Select from "react-select";
import Filter from "../filter/Filter";
import makeAnimated from "react-select/animated";
import ActivityCard from "../thumbnailActivity/ActivityCard";
import activitiesData from "../../apiCalls/dummyData.js";

export default function AllActivities({ allActivities }) {
  const [activities, setActivityData] = useState(activitiesData.activities);
  const [originalActivities, setOriginalActivityData] = useState(
    activitiesData.activities
  );
  console.log(activities);
  const activityOptions = [
    { value: "indoor", label: "indoor" },
    { value: "outdoor", label: "outdoor" },
  ];
  console.log(activityOptions);
  const animatedComponents = makeAnimated();
  //create animated wrappers around components passed in as arguments

  const showFilterActivities = (arrayOfInput) => {
    
    if (arrayOfInput.length === 0) {
      setActivityData(originalActivities);
      return;
    }
    const filterActivities = originalActivities.filter((act) => {
      /
      return arrayOfInput.every((input) => act[input.value] === true);
      
    });

    setActivityData(filterActivities);
  };

  const activityCards = activities.map((activity) => {
    return (
      <ActivityCard
        key={activity.id}
        id={activity.id}
        image={activity.path}
        startAge={activity.startAge}
        endAge={activity.endAge}
        name={activity.name}
        materials={activity.materials}
        instructions={activity.instructions}
        indoor={activity.indoor}
        outdoor={activity.outdoor}
        motorSkill={activity.motorSkill}
      />
    );
  });

  return (
    <section className="all-activities-section">
      <p>this is all activities</p>
     

      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={activityOptions}
        onChange={(e) => showFilterActivities(e)}
      />
      <div className="activity-container">{activityCards}</div>
    </section>
  );
}
