import React, {useState} from "react";
import activitiesData from "../../apiCalls/dummyData";
import "./ToDos.scss";

export default function ToDos() {


    return (
        <>
          <h2>To-Do List</h2>
          <section className="to-do-container">
            {/* mapped to-do activity cards go here (selected by user to-do) */}
          </section>
        </>
    );
}