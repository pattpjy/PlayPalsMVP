import React from "react";
import { useLocation } from "react-router-dom";
import "./ActivityInfoView.scss";
import { AiOutlineCheckCircle } from "react-icons/ai"
// import { AiFillCheckCircle } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
// import { AiFillHeart } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
// import { BsFillBookmarkFill } from "react-icons/bs"

export default function ActivityInfoView() {
	const location = useLocation()
	const data = location.state.singleActivity
	console.log('data', location.state.singleActivity)
	return (
		<section className='activity-info-view-container'>
			<div className='heart-and-name'>
				<AiOutlineHeart type='button' alt='blankHeart' />
				<h3 className='name'>{data.name}</h3>
			</div>
			<div className='picture-buttons'>
				<img src={data.image} alt={data.name} />
				<div className='buttons'>
					<AiOutlineCheckCircle type='button' alt='blankCheckmark' />
					<BsBookmark type='button' alt='blankBookmark' />
				</div>
			</div>
			<div className='information'>
				<p>{data.startAge} months -{data.endAge} months</p>
				<p>MATERIALS <br /> {data.materials}</p>
				<p>INSTRUCTIONS <br /> {data.instructions}</p>
			</div>
		</section>
	)
}