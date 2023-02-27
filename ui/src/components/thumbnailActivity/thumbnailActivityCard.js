import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./thumbnailActivityCard.scss";
import { AiFillCheckCircle, AiOutlineHeart, AiFillHeart, AiOutlineCheckCircle } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";


export default function ActivityCard({
  id,
  name,
  startAge,
  endAge,
  image,
  activities,
}) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <section id={id} className="activity-card">
      <div className="title">
        <p className="activity-name">{name}</p>
        <p className="activity-age">
          {startAge} months-{endAge} months
        </p>
      </div>
      <div className="pics-container">
        <Link
          to={`/Activities/${id}`}
          state={{ id: id, activities: activities }}
          style={{ textDecoration: "none" }}
          className="activity-link"
        >
          <img className="activity-image" src={image} alt={name} width={300} />
        </Link>
        <div className="tv-dials">
          {!toggle && (
            <MdFavoriteBorder
              className="heartmark"
              onClick={handleToggle}
              type="button"
              alt="heart icon"
            />
          )}
          {toggle && (
            <MdFavorite
              className="heartmark"
              onClick={handleToggle}
              type="button"
              alt="heart icon filled"
            />
          )}

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
						{!toggle && <AiOutlineHeart className="heartmark" onClick={handleToggle} type='button' alt='heart icon'/>}
						{toggle && <AiFillHeart className="heartmark2" onClick={handleToggle} type='button' alt='filled heart icon'/>}

						{!toggle && <BsBookmark className="bookmark" onClick={handleToggle} type='button' alt='empty bookmark icon'/>}
						{toggle && <BsFillBookmarkFill className="bookmark2" onClick={handleToggle} type='button' alt='filled bookmark icon'/>}

						{!toggle && <AiOutlineCheckCircle className="check-circle" onClick={handleToggle} type='button' alt='empty checkmark circle icon'/>}
						{toggle && <AiFillCheckCircle className="check-circle2" onClick={handleToggle} type='button' alt='filled checkmark circle icon'/>}
					</div>
				</div>
		</section>
	)
}
