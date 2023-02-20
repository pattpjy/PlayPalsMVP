import React from "react";
import "./Filter.scss";

export default function Filter() {
    return (
        <label className="drop-down"> Pick Type:
            <select>
                <option value="outdoor">outdoor</option>
                <option value="indoor">indoor</option>
            </select>
        </label>
    );
}