import React from 'react';
import './ParkCard.css';

const LabsCard = ({
  lab
}) => {
  return (
    <div>
      <div><h3><a href={lab.website}>{lab.name}</a></h3></div>
      <div><p>{lab.established.description}</p></div>
      <div>
        <img className="lab-image" src={lab.images[0]} role="presentation"/>
      </div>
    </div>
  );
};

export default LabsCard;
