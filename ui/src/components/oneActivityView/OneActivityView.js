import React, { useState } from "react";
import "./OneActivityView.scss";
import { AiFillCheckCircle, AiOutlineHeart, AiFillHeart, AiOutlineCheckCircle } from "react-icons/ai"
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs"
import { useLocation } from "react-router-dom";

export default function ActivityInfoView() {
	const location = useLocation()
	const currentId = location.state.id
	// console.log("location.state:", location.state)
	const allActivities = location.state.activities
	// console.log('location', allActivities)
	// console.log('currentid', currentId)
	const currentActivity = allActivities.find(activity => activity.id === currentId)
	// console.log('currentActivity', currentActivity)
	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		setToggle(!toggle)
	}


	return (
		<section className='activity-info-view-container'>
			<div className='heart-and-name'>
				<h3 className='name'>{currentActivity.name}</h3>
				{!toggle && <AiOutlineHeart onClick={handleToggle} type='button' alt='blankHeart' className="heart-icon"/>}
				{toggle && <AiFillHeart onClick={handleToggle} type='button' alt='filledHeart' className="heart-icon"/>}
			</div>
			<div className='picture-buttons'>
				<img src={currentActivity.img_url} alt={currentActivity.name} className="activity-pic"/>
				<div className='buttons'>
					{!toggle && <AiOutlineCheckCircle onClick={handleToggle} type='button' alt='blankCheckmark' className="check-icon"/>}
					{toggle && <AiFillCheckCircle onClick={handleToggle} type='button' alt='blankCheckmark'  className="check-icon"/>}
					{!toggle && <BsBookmark onClick={handleToggle} type='button' alt='blankBookmark' className="bookmark-icon"/>}
					{toggle && <BsFillBookmarkFill onClick={handleToggle} type='button' alt='blankBookmark' className="bookmark-icon"/>}
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