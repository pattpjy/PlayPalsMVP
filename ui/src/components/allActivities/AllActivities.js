import React from "react";
import "./AllActivities.scss";
import Filter from "../filter/Filter";
import ActivityCard from "../thumbnailActivity/ActivityCard";
import activitiesData from "../../apiCall/dummyData";


export default function AllActivities({ allActivities}) {
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
				motorSkill={activity.motorSkill} />
		)
	})
	return (
		<section className="all-activities-section">
			<Filter />
			<div className='activity-container'>
				{activityCards}
			</div>
		</section>
	);
}
