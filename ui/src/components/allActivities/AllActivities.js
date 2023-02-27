import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./AllActivities.scss";
import ActivityCard from "../thumbnailActivity/thumbnailActivityCard";

export default function AllActivities({ activities }) {
  const [selectedActivities, setSelectedActivities] = useState(activities);
  useEffect(() => {
    setSelectedActivities(activities);
  }, [activities]);

  const animatedComponents = makeAnimated();

  const activityOptions = [
    { value: "indoor", label: "indoor" },
    { value: "outdoor", label: "outdoor" },
  ];

  const showFilteredActivities = (arrayOfInput) => {
    if (arrayOfInput.length === 0) {
      setSelectedActivities(activities);
      return;
    }

    const filteredActivities = activities.filter((act) => {
      return arrayOfInput.every((input) => act[input.value] === true);
    });

    setSelectedActivities(filteredActivities);
  };

  const activityCards = selectedActivities.map((activity) => {
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
        onChange={(e) => showFilteredActivities(e)}
      />
      <div className="activity-container">{activityCards}</div>
    </section>
  );
}
