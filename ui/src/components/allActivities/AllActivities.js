import React, {useState} from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./AllActivities.scss";
import ActivityCard from "../thumbnailActivity/ThumbnailActivityCard";

export default function AllActivities({activities}) {
  const [selectedActivities, setSelectedActivities] = useState(activities)
  const animatedComponents = makeAnimated();
  //create animated wrappers around components passed in as arguments
  //keep here in AllActivities.js for filter dropdown mechanics

  const activityOptions = [
    { value: "indoor", label: "indoor" },
    { value: "outdoor", label: "outdoor" },
  ];

  const showFilteredActivities = (arrayOfInput) => {
    if (arrayOfInput.length === 0) {
      console.log(selectedActivities)
      setSelectedActivities(activities);
      return;
    }

    const filteredActivities = activities.filter((act) => {
      return arrayOfInput.every((input) => act[input.value] === true);
    });

    setSelectedActivities(filteredActivities);
    // return selectedActivities;
    //^^this is the filter state
  };

//activities here needs to be true to state here, not original full list because of the filter

  const activityCards = selectedActivities.map((activity) => {
    //  ^^current JSX   ^^selectedActivities array
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
      <div className="activity-container">
        {activityCards}
      </div>
    </section>
  );
}
