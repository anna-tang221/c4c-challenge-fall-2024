import React from 'react';
import PartnerTile from './PartnerTile';

function PartnerList({ partners }) {
  return (
    <>
      {partners.map((partner, index) => (
        <PartnerTile key={index} partnerData={partner} />
      ))}
    </>
  );
}

export default PartnerList;