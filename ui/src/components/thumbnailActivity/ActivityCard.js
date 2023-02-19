import React from "react";
import './ActivityCard.scss'
import {AiOutlineCheckCircle} from "react-icons/ai"
import {AiFillCheckCircle} from "react-icons/ai"

export default function ActivityCard({title,startAge,endAge}) {
	return (
		<section>
			<p>{title}</p>
			<p>{startAge} {endAge}</p>
			<img alt='Some-text'/>
			<AiOutlineCheckCircle />
		</section>
	)
}