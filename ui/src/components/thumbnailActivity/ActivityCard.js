import React, {useState}from "react";
import { Link } from "react-router-dom";
import './ActivityCard.scss'
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs"

export default function ActivityCard({ id, name, startAge, endAge, image, activities }) {

	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		setToggle(!toggle)
	}
	

	return (
		<section id={id} className='activity-card'>
				<div className='title'>
					<p className='activity-name'>{name}</p>
					<p className="activity-age">{startAge} months-{endAge} months</p>
				</div>
				<div className="pics-container">
					<Link to={`/Activities/${id}`} state={{id: id, activities: activities}} style={{ textDecoration: 'none' }} className="activity-link">
						<img className="activity-image" src={image} alt={name} width={300} />
					</Link>

					{!toggle && <BsBookmark className="bookmark" onClick={handleToggle} type='button' alt='blankBookmark'/>}

					{toggle && <BsFillBookmarkFill className="bookmark" onClick={handleToggle} type='button' alt='blankBookmark'/>}
				</div>
		</section>
	)
}
