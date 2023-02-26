import React, {useState}from "react";
import { Link } from "react-router-dom";
import "./thumbnailActivityCard.scss";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { MdFavoriteBorder, MdFavorite} from "react-icons/md";

export default function ActivityCard({ id, name, startAge, endAge, image, activities }) {

	const [heartToggle, setHeartToggle] = useState(false)
	const [bookmarkToggle, setBookmarkToggle] = useState(false)

	const handleHeartToggle = () => {
		setHeartToggle(!heartToggle)
	}
	const handleBookmarkToggle = () => {
		setBookmarkToggle(!bookmarkToggle)
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
					<div className="tv-dials">
						{!heartToggle && <MdFavoriteBorder className="heartmark" onClick={handleHeartToggle} type='button' alt='heart icon'/>}
						{heartToggle && <MdFavorite className="heartmark" onClick={handleHeartToggle} type='button' alt='heart icon filled'/>}

						{!bookmarkToggle && <BsBookmark className="bookmark" onClick={handleBookmarkToggle} type='button' alt='empty bookmark'/>}
						{bookmarkToggle && <BsFillBookmarkFill className="bookmark" onClick={handleBookmarkToggle} type='button' alt='filled bookmark'/>}
					</div>
				</div>
		</section>
	)
}
