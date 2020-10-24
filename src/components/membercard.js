import React from "react";

function Membercard(props) {
  return (
    <div className="team team-list clearfix">
      <div className="team-image">
        <img
          src={props.imgurl}
          alt={props.imgalt}
        />
      </div>

      <div className="team-desc">
        <div className="team-title">
          <h4>{props.name}</h4>
          <span>{props.jobtitle}</span>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Membercard;
