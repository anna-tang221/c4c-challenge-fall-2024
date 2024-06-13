import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard() {

  //const [partners, setPartners] = useState({});
  /*
  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
    .then((res) => res.json())
  }, [])
*/
const initialPartners = [
  {
    name: "Breaktime",
    description: "Breaktime’s mission is to break the cycle of homelessness by equipping young adults with the job and financial security they need to establish housing security. A key part of the program is by providing meaningful employment. We are assisting Breaktime in building a bespoke system for their unique needs.",
    logo: "https://static.wixstatic.com/media/1193ef_371853f9145b445fb883f16ed7741b60~mv2.jpg/v1/crop/x_0,y_2,w_1842,h_332/fill/w_466,h_84,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Breaktime%20Logo%20Comfortaa-2.jpg",
    active: true
  },
  {
    name: "This Star Won't Go Out",
    description: "Since its founding in 2011, TSWGO has helped hundreds of families, with gifts totaling over $450,000 to help families suffering from financial hardship related to childhood cancer. We're helping to streamline this system so that TSWGO can focus their attention on helping families.",
    logo: "https://images.squarespace-cdn.com/content/v1/5afe1b373e2d09d58a8b7629/1548818988674-PNHSLS67AF1SRNW6JAX4/LOGO_TSWGO_1.png?format=1500w",
    active: false
  },
  {
    name: "Lucy's Love Bus - Practitioner Network",
    description: "Lucy’s Love Bus improves quality of life for children with cancer or other life-threatening illnesses with integrative therapies like massage, meditation, acupuncture, music therapy, and therapeutic horseback riding. Integrative therapies ease children’s pain and anxiety during and after traditional medical treatments. We are building an open search directory to allow families across New England to find integrative therapists in their area.",
    logo: "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_2019_rgb.png",
    active: true
  }
];
  return (
    <div id="main-content">
      <div id="main-partners-grid">
      {initialPartners.map((partner, index) => (
          <PartnerTile key={index} partnerData={partner} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard;