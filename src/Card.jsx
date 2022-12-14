import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            width={"100px"}
            height={"300px"}
            src={props.imgsrc}
            className="card-img-top"
            alt={props.src}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some Quick Example Text to Build on the Card Title and the bulk of
              the Card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Buy Something
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
