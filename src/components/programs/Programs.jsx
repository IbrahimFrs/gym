import React from "react";
import "./programs.css";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";

export default function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      <div className="program-categories">
        {programsData.map((program, i) => {
          return (
            <div className="category" key={i}>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={rightArrow} alt="" srcset="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
