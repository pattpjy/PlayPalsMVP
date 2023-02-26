import React, {useState}from "react";
import { Link } from "react-router-dom";
import "./ThumbnailActivityCard.scss";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { MdFavoriteBorder, MdFavorite} from "react-icons/md";

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
					<div className="tv-dials">
						{!toggle && <MdFavoriteBorder className="heartmark" onClick={handleToggle} type='button' alt='heart icon'/>}
						{toggle && <MdFavorite className="heartmark" onClick={handleToggle} type='button' alt='heart icon filled'/>}

						{!toggle && <BsBookmark className="bookmark" onClick={handleToggle} type='button' alt='empty bookmark'/>}
						{toggle && <BsFillBookmarkFill className="bookmark" onClick={handleToggle} type='button' alt='filled bookmark'/>}
					</div>
				</div>
		</section>
	)
}
