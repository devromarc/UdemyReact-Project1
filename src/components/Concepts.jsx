import React from "react";
import "../index.css";

const Concepts = (props) => {
  return (
    <>
      <li className="concept">
        <img src={props.pic} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </li>
    </>
  );
};

export default Concepts;
