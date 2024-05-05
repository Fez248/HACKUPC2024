
import OurCards from '../../public/scripts/ourCard.js';
import homeHero from '/public/homeHero.png';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import MapInteractive from '../../components/mapInteractiveClient';

export default function homePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
      {/* Hero Section */}
      <Image alt="Card background" {...homeHero} className="object-cover h-[300px]" />
      <p className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white z-10 font-mono">READY FOR YOUR NEXT ADVENTURE?</p>
      <p className="text-left mt-3 mb-3 text-3xl">POPULAR</p>
      <OurCards />
    </div>
      <OurCards/>
    </div>
  );
}
