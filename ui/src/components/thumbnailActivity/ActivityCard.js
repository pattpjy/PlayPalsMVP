import React, {useState} from "react";
import './ActivityCard.scss'
import {BsBookmark} from "react-icons/bs"
import {BsFillBookmarkFill} from "react-icons/bs"

export default function ActivityCard({title,startAge,endAge}) {
	
	return (
		<section>
			<p>{title}</p>
			<p>{startAge}-{endAge}</p>
			<img alt='Some-text'/>
			<BsBookmark type='button' alt='blankBookmark' />
		</section>
	)
}
