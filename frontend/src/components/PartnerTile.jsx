import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {

  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.logo || 'placeholder.jpg'} alt={partnerData.name} />
      <hr />
      <div className="partner-info">
        <h2>{partnerData.name}</h2>
        <p>{partnerData.description}</p>
        <p>{partnerData.active ? 'Active' : 'Not Active'}</p>
      </div>
    </div>
  );
}

export default PartnerTile;