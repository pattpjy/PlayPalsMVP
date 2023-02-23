import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
// import Filter from "../filter/Filter";
import makeAnimated from "react-select/animated";
import ActivityCard from "../thumbnailActivity/ActivityCard";
import activitiesData from "../../apiCalls/dummyData.js";
import "./AllActivities.scss";

export default function AllActivities() {
  const [activities, setActivityData] = useState(activitiesData.activities);
  const [originalActivities] = useState(activitiesData.activities);
  const [singleActivity, setSingleActivity] = useState({})
  // const [singleActivityId, setSingleActivityId] = useState()
  console.log('singleActivity', singleActivity)

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



  const handleClick = (id) => {
    // console.log('id', id)
    const findSingleActivity =  activities.find(activity => activity.id === id)
    console.log("find", findSingleActivity)
    // if(findSingleActivity) {
      // setSingleActivity(findSingleActivity)

      // console.log("setsingle", singleActivity)
      return findSingleActivity
    }
  

  // useEffect(() => {

  //   const findSingleActivity =  activities.find(activity => activity.id === singleActivityId)
  //   setSingleActivity(findSingleActivity)
    
  // }, [singleActivityId])
 

  
  
  const activityCards = activities.map((activity) => {
    return (
      <Link 
      to={`/Activities/${activity.id}`} 
      state={{singleActivity: singleActivity}} 
      onClick={() => setSingleActivity(handleClick(activity.id))} 
      key={activity.name} 
      style={{ textDecoration: 'none' }}>
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
      </Link>
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
      <div className="activity-container">
        {activityCards}
      </div>
    </section>
  );
}
