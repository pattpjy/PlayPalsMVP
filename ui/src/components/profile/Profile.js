import React from "react";
import "./Profile.scss";
import { RiFileList2Line } from "react-icons/ri";

export default function Profile({finishedActivities}) {
    console.log("Finished Activities: ", finishedActivities)
    //function to give feedback
    return (
        <section className="report">
            <h2 className="report-h2"><RiFileList2Line className="list-icon" alt="list icon"/>&nbsp;Kiddo Report Card</h2>
            <p className="report-p">Summary of "Done" Activities</p>
            <p className="report-p">This is our way to display to the user that they have quantifiable results.</p>
            <p className="report-p">"reassurance"</p>
            <p className="report-p">Look at all the things we've done together!</p>
            <p className="report-p">I'm a good parent and it doesn't matter what activities I did, just that I did activities with my kid!</p>
            <p className="report-p">NEED LOGIC: to display stats, like, "seems like you guys like 'hiking' the most!"</p>
            {/* wishlist: be able to print report card  */}
        </section>
    );
}