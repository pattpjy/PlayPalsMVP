import React, { useState, useEffect } from "react";
import "./ActivityInfoView.scss";
import { AiOutlineCheckCircle } from "react-icons/ai"
import { AiFillCheckCircle } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { BsFillBookmarkFill } from "react-icons/bs"

export default function ActivityInfoView({singleActivity}) {
	return (
		<section className='activity-info-view-container'>
			<div className='heart-and-name'>
				<AiOutlineHeart type='button' alt='blankHeart' />
				<h3 className='name'>{singleActivity.name}</h3>
			</div>
			<div className='picture-buttons'>
				<img src={singleActivity.image} alt={singleActivity.name} />
				<div className='buttons'>
					<AiOutlineCheckCircle type='button' alt='blankCheckmark' />
					<BsBookmark type='button' alt='blankBookmark' />
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