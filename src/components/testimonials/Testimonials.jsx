import React, { useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

export default function Testimonials() {
  const transition = { type: "spring", duration: 3 };
  const [Selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
          key={Selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[0].review}
        </motion.span>
        <span>
          <span
            style={{
              color: "var(--orange)",
            }}
          >
            {testimonialsData[Selected].name}
          </span>{" "}
          - {testimonialsData[Selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={Selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[Selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              Selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              Selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
