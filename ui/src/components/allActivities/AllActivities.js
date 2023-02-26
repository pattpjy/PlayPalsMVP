import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ActivityCard from "../thumbnailActivity/thumbnailActivityCard";
import activitiesData from "../../apiCalls/dummyData.js";
import "./AllActivities.scss";

export default function AllActivities() {
  const [activities, setActivityData] = useState(activitiesData.activities);
  const [originalActivities] = useState(activitiesData.activities);

  const activityOptions = [
    { value: "indoor", label: "indoor" },
    { value: "outdoor", label: "outdoor" },
  ];

  const animatedComponents = makeAnimated();
  //create animated wrappers around components passed in as arguments

  const showFilterActivities = (arrayOfInput) => {
    if (arrayOfInput.length === 0) {
      setActivityData(originalActivities);
      return;
    }
    const filterActivities = originalActivities.filter((act) => {
      return arrayOfInput.every((input) => act[input.value] === true);
    });
    setActivityData(filterActivities);
  };

  const activityCards = activities.map((activity) => {
    return (
        <ActivityCard
          key={activity.id}
          id={activity.id}
          image={activity.img_url}
          startAge={activity.start_age}
          endAge={activity.end_age}
          name={activity.name}
          materials={activity.materials}
          instructions={activity.instructions}
          indoor={activity.indoor}
          outdoor={activity.outdoor}
          motorSkill={activity.motor_skills}
          activities={activities}
        />
    );
  });

  return (
    <section className="all-activities-section">
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={activityOptions}
        onChange={(e) => showFilterActivities(e)}
      />
      <div className="activity-container">
        {activityCards}
      </div>
    </section>
  );
}
