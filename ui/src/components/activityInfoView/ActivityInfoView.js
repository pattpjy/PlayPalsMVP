import React, { useState } from "react";
import "./ActivityInfoView.scss";
import { AiFillCheckCircle, AiOutlineHeart, AiFillHeart, AiOutlineCheckCircle } from "react-icons/ai"
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs"
import { useLocation } from "react-router-dom";

export default function ActivityInfoView() {
	const location = useLocation()
	const currentId = location.state.id
	const allActivities = location.state.activities
	console.log('location', allActivities)
	console.log('currentid', currentId)
	const currentActivity = allActivities.find(activity => activity.id === currentId)
	console.log('currentActivity', currentActivity)
	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		setToggle(!toggle)
	}


	return (
		<section className='activity-info-view-container'>
			<div className='heart-and-name'>
				{!toggle && <AiOutlineHeart onClick={handleToggle} type='button' alt='blankHeart' />}
				{toggle && <AiFillHeart onClick={handleToggle} type='button' alt='filledHeart' />}
				<h3 className='name'>{currentActivity.name}</h3>
			</div>
			<div className='picture-buttons'>
				<img src={currentActivity.img_url} alt={currentActivity.name} />
				<div className='buttons'>
					{!toggle && <AiOutlineCheckCircle onClick={handleToggle} type='button' alt='blankCheckmark' />}
					{toggle && <AiFillCheckCircle onClick={handleToggle} type='button' alt='blankCheckmark' />}
					{!toggle && <BsBookmark onClick={handleToggle} type='button' alt='blankBookmark' />}
					{toggle && <BsFillBookmarkFill onClick={handleToggle} type='button' alt='blankBookmark' />}
				</div>
			</div>
			<div className='information'>
				<p>{currentActivity.start_age} months -{currentActivity.end_age} months</p>
				<p>MATERIALS <br /> {currentActivity.materials}</p>
				<p>INSTRUCTIONS <br /> {currentActivity.instructions}</p>
			</div>
		</section>
	)
}