
import OurCards from '../../public/scripts/ourCard.js';
import homeHero from '/public/homeHero.png';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import MapInteractive from '../../components/mapInteractiveClient';

export default function homePage() {
  return (
    <div>
      {/* Hero Section */}
      <Image alt="Card background" {...homeHero} className='object-cover h-[300px]'/>
      <p className='text-left mt-3 mb-3'>RECOMENDED FOR YOU</p>
      <OurCards/>
    </div>
  );
}
