import React, {useState}from "react";
import { Link } from "react-router-dom";
import './ActivityCard.scss'
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs"

export default function ActivityCard({ id, name, startAge, endAge, image, activities }) {
	// logic for deciding if needs to be converted into years or to keep in months
	// const startAgeInYears = startAge/12
	// const endAgeInYears = endAge/12
	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		setToggle(!toggle)
	}
	

	return (
		<section id={id} className='activity-card'>
			<Link to={`/Activities/${id}`} state={{id: id, activities: activities}} style={{ textDecoration: 'none' }}>
				<div className='title'>
					<p className='activity-name'>{name}</p>
					<p className="activity-age">{startAge} months-{endAge} months</p>
				</div>
				<img className="activity-image" src={image} alt={name} width={300} />
			</Link>
			{!toggle && <BsBookmark onClick={handleToggle} type='button' alt='blankBookmark'/>}
			{toggle && <BsFillBookmarkFill onClick={handleToggle} type='button' alt='blankBookmark'/>}
		</section>
	)
}
