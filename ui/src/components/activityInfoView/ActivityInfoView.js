import React from "react";
import "./ActivityInfoView.scss";
import { AiOutlineCheckCircle } from "react-icons/ai"
import { AiFillCheckCircle } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { BsFillBookmarkFill } from "react-icons/bs"

export default function ActivityInfoView({title,startAge,endAge, materials,instructions}) {
	return (
		<section>
			<p>{title}</p>
			<p>{startAge}-{endAge}</p>
			<img alt={title} />
			<p>{materials}</p>
			<p>{instructions}</p>
			<BsBookmark type='button' alt='blankBookmark' />
			<AiOutlineCheckCircle type='button' alt='blankCheckmark' />
			<AiOutlineHeart type='button' alt='blankHeart' />
		</section>
	)
}