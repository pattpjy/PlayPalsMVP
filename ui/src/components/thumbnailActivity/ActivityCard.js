import React, {useState} from "react";
import './ActivityCard.scss'
import {BsBookmark} from "react-icons/bs"
import {BsFillBookmarkFill} from "react-icons/bs"

export default function ActivityCard({id,name,startAge,endAge}) {
	
	return (
		<section id={id}className='activity-card'>
			<p className='activity-name'>{name}</p>
			<p>{startAge}-{endAge}</p>
			<img alt={name}/>
			<BsBookmark type='button' alt='blankBookmark' />
		</section>
	)
}
