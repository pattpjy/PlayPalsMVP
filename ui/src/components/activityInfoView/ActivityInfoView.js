import React from "react";
import "./ActivityInfoView.scss";
import { AiOutlineCheckCircle } from "react-icons/ai"
// import { AiFillCheckCircle } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
// import { AiFillHeart } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { useLocation } from "react-router-dom";
// import { BsFillBookmarkFill } from "react-icons/bs"

export default function ActivityInfoView() {
	const location = useLocation()
	const currentId = location.state.id
	const allActivities = location.state.activities
	console.log('location', allActivities)
	console.log('currentid', currentId)
	const currentActivity = allActivities.find(activity => activity.id === currentId)
	console.log('currentActivity', currentActivity)
	return (
		<section className='activity-info-view-container'>
			<div className='heart-and-name'>
				<AiOutlineHeart type='button' alt='blankHeart' />
				<h3 className='name'>{currentActivity.name}</h3>
			</div>
			<div className='picture-buttons'>
				<img src={currentActivity.image} alt={currentActivity.name} />
				<div className='buttons'>
					<AiOutlineCheckCircle type='button' alt='blankCheckmark' />
					<BsBookmark type='button' alt='blankBookmark' />
				</div>
			</div>
			<div className='information'>
				<p>{currentActivity.startAge} months -{currentActivity.endAge} months</p>
				<p>MATERIALS <br /> {currentActivity.materials}</p>
				<p>INSTRUCTIONS <br /> {currentActivity.instructions}</p>
			</div>
		</section>
	)
}