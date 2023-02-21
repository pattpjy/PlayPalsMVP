import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderNav.scss";
import { BiGame } from "react-icons/bi";
import { IoIosClipboard } from "react-icons/io"

export default function HeaderNav() {
    const navigate = useNavigate();
    return (
        <header className="header-container">
                <nav className="header-nav">
                    <button className="invis-button" onClick={() => navigate("/ToDos")}>
                        <IoIosClipboard className="clipboard" alt="bookmark icon" />
                    </button>
                    <button className="invis-button" onClick={() => navigate("/AllActivities")}>
                        <h1 className="main-title">Kid Tasks</h1>   
                    </button >
                    <button className="invis-button" onClick={() => navigate("/Profile")}>
                        <BiGame className="dude" alt="little dude icon" />      
                    </button>  
                </nav>
        </header>
    );
}