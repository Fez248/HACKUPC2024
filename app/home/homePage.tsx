
import OurCards from '../../public/scripts/ourCard';
import homeHero from '/public/homeHero.png';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import MapInteractive from '../../components/mapInteractiveClient';
import "./style.css";

export default function homePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
      {/* Hero Section */}
      <Image alt="Card background" {...homeHero} className="object-cover h-[300px]" />
      <p className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white z-10 font-mono">READY FOR YOUR NEXT ADVENTURE?</p>
      <div className="spacer layer1 z-0 top-50 absolute"></div>
      <p className="mt-6 subtitle">Popular right now</p>
      <OurCards/>
    </div>
    </div>
  );
}
