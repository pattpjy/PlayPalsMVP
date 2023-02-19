import React from "react";
import "./Filter.scss";

export default function Filter() {
    return (
        <label className="drop-down"> Pick Type:
            <select>
                <option value="outdoor">outdoor</option>
                <option value="indoor">indoor</option>
                <option value="free">free</option>
                <option value="fine-motor-skills">fine motor skills</option>
                <option value="gross-motor-skills">gross motor skills</option>
            </select>
        </label>
    );
}