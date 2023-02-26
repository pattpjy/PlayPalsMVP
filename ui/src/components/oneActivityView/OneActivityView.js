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
	const [heartToggle, setHeartToggle] = useState(false)
	const [bookmarkToggle, setBookmarkToggle] = useState(false)
	const [checkmarkToggle, setCheckmarkToggle] = useState(false)

	const handleHeartToggle = () => {
		setHeartToggle(!heartToggle)
	}
	const handleBookmarkToggle = () => {
		setBookmarkToggle(!bookmarkToggle)
	}

	const handleCheckmarkToggle = () => {
		setCheckmarkToggle(!checkmarkToggle)
	}


	return (
		<section className='activity-info-view-container'>
			<div className='heart-and-name'>
				{!heartToggle && <AiOutlineHeart onClick={handleHeartToggle} type='button' alt='blankHeart' />}
				{heartToggle && <AiFillHeart onClick={handleHeartToggle} type='button' alt='filledHeart' />}
				<h3 className='name'>{currentActivity.name}</h3>
			</div>
			<div className='picture-buttons'>
				<img src={currentActivity.img_url} alt={currentActivity.name} />
				<div className='buttons'>
					{!checkmarkToggle && <AiOutlineCheckCircle onClick={handleCheckmarkToggle} type='button' alt='blankCheckmark' />}
					{checkmarkToggle && <AiFillCheckCircle onClick={handleCheckmarkToggle} type='button' alt='blankCheckmark' />}
					{!bookmarkToggle && <BsBookmark onClick={handleBookmarkToggle} type='button' alt='blankBookmark' />}
					{bookmarkToggle && <BsFillBookmarkFill onClick={handleBookmarkToggle} type='button' alt='blankBookmark' />}
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