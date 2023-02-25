import React, { useState } from "react";
import "./ActivityInfoView.scss";
import { AiFillAccountBook, AiFillCheckCircle, AiOutlineHeart, AiFillHeart, AiOutlineCheckCircle } from "react-icons/ai"
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs"

export default function ActivityInfoView({ singleActivity }) {
	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		setToggle(!toggle)
	}

	return (
		<section className='activity-info-view-container'>
			<div className='heart-and-name'>
				{!toggle && <AiOutlineHeart onClick={handleToggle} type='button' alt='blankHeart' />}
				{toggle && <AiFillHeart onClick={handleToggle} type='button' alt='filledHeart' />}
				<h3 className='name'>{singleActivity.name}</h3>
			</div>
			<div className='picture-buttons'>
				<img src={singleActivity.image} alt={singleActivity.name} />
				<div className='buttons'>
					{!toggle && <AiOutlineCheckCircle onClick={handleToggle} type='button' alt='blankCheckmark' />}
					{toggle && <AiFillCheckCircle onClick={handleToggle} type='button' alt='blankCheckmark' />}
					{!toggle && <BsBookmark onClick={handleToggle} type='button' alt='blankBookmark' />}
					{toggle && <BsFillBookmarkFill onClick={handleToggle} type='button' alt='blankBookmark' />}
				</div>
			</div>
			<div className='information'>
				<p>{singleActivity.startAge} months -{singleActivity.endAge} months</p>
				<p>MATERIALS <br /> {singleActivity.materials}</p>
				<p>INSTRUCTIONS <br /> {singleActivity.instructions}</p>
			</div>
		</section>
	)
}