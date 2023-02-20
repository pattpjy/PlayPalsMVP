import React from "react";
import "./HeaderNav.scss";
import { BsBookmarkStarFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function HeaderNav() {
    return (
        <header className="header">
            <nav>
                <BsBookmarkStarFill alt="bookmark icon" />
                <h1>Title</h1> //make this a link to activity list
                {/* // ^^ add <Link /> to always go back to all activities  */}
                <CgProfile alt="profile icon" />
            </nav>
        </header>
    );
}