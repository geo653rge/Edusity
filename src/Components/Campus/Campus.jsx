import React from "react";
import "./Campus.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery1} alt=" campus students photo" />
        <img src={gallery2} alt="campus students photo" />
        <img src={gallery3} alt="campus students photo" />
        <img src={gallery4} alt="campus students photo" />
      </div>
      <button className="btn dark-btn">See more here <img src={white_arrow} alt="" /></button>
    </div>
  );
};

export default Campus;
