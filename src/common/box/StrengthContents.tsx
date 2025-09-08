import React from "react";
import "../../styles/skills.css";

const StrengthContents = ({
  contents,
  skill,
  img,
}: {
  contents: string;
  skill: string;
  img: string;
}) => {
  return (
    <div className="three">
      <div className="content-container">
        <div className="content_box">
          <img className="content_img" src={img} alt="" />
          {contents}
        </div>

        <div className="content_title">{skill}</div>
      </div>
    </div>
  );
};

export default StrengthContents;
