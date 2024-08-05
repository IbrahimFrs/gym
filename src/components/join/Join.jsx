import React, { useRef } from "react";
import "./join.css";
import emailjs from "@emailjs/browser";

export default function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qx62fvh",
        "template_or4gj5t",
        form.current,
        "tUU_I6zhlrpXtIMUf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action="#"
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            id=""
            placeholder="Enter Your Email Address Here"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}
