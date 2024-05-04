import Head from 'next/head';
import OurCards from '../../../public/scripts/ourCard.js';
import MapboxMap from '../../../components/mapboxMap';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { cardsData } from '@/public/scripts/data.js';
import { Spacer } from "@nextui-org/spacer";

function TravelPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div>
        <p className='text-xl'>Trip to {cardsData[+params.id].destination}</p>
        <p>{cardsData[+params.id].description}</p>
      </div>
      <div className='w-3/4'><MapboxMap/></div>
    </div>
  );
}

export default TravelPage;

