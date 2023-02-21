import React, { useState } from "react";
import "./AllActivities.scss";
import Filter from "../filter/Filter";
import ActivityCard from "../thumbnailActivity/ActivityCard";
import activitiesData from "../../apiCalls/dummyData.js";


export default function AllActivities({allActivities}) {
	// const [activities, setActivityData] = useState(activitiesData.activities);
	console.log(allActivities);
	const activityOptions = Object.keys(allActivities[0]);

	const activityCards = allActivities.map(activity => {
		return (
			<ActivityCard
				key={activity.id}
				id={activity.id}
				image={activity.path}
				startAge={activity.startAge}
				endAge={activity.endAge}
				name={activity.name}
				matertials={activity.materials}
				instructions={activity.instructions}
				indoor={activity.indoor}
				outdoor={activity.outdoor}
				motorSkill={activity.motorSkill} 
			/>
		)
	});

	return (
		<section className="all-activities-section">
			<p>this is all activities</p>
			<Filter isMulti placeHolder="Select..." options={activityOptions} />
			<div className='activity-container'>
				{activityCards}
			</div>
		</section>
	);
}
