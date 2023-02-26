import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ActivityCard from "../thumbnailActivity/ThumbnailActivityCard";
import activitiesData from "../../apiCalls/dummyData.js";
import "./AllActivities.scss";

export default function AllActivities({activities, setActivityData}) {
  // console.log("AllActivities activities props", activities)
  const animatedComponents = makeAnimated();
  //create animated wrappers around components passed in as arguments
  //keep here in AllActivities.js for filter dropdown mechanics

  //move state up. App.js should be able to pass a "pure" activities list for 'originalActivities'
  // const [activities, setActivityData] = useState(activities);
  const originalActivities = activities;
  //filter variables, const needed here for filter mechanism, also pass down filter function kept in App.js?
  //keep this here for the return below
  const activityOptions = [
    { value: "indoor", label: "indoor" },
    { value: "outdoor", label: "outdoor" },
  ];

  //?
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
