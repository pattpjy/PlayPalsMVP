import React from "react";
import './ActivityCard.scss'
import { BsBookmark } from "react-icons/bs"

import { BsFillBookmarkFill } from "react-icons/bs"

export default function ActivityCard({ id, name, startAge, endAge, image }) {
	// logic for deciding if needs to be converted into years or to keep in months
	// const startAgeInYears = startAge/12
	// const endAgeInYears = endAge/12

	return (
		<section id={id} className='activity-card'>
			<div className='title'>
				<p className='activity-name'>{name}</p>
				<p>{startAge} months-{endAge} months</p>
			</div>
			<img src={image} alt={name} width={300} />
			<BsBookmark type='button' alt='blankBookmark' />
		</section>
	)
}
