import React from "react";
import "./HeaderNav.scss";
import { ImHome2 } from "react-icons/im";
import { BsBookmarkStarFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function HeaderNav() {
    return (
        <header className="header">
            <nav>
                <ImHome2 alt="home icon" />
                <BsBookmarkStarFill alt="bookmark icon" />
                <h1>Title</h1>
                <CgProfile alt="profile icon" />
                //^these are placeholders based on the MIRO design, might be worth discussing design more^
            </nav>
        </header>
    );
}