import Head from 'next/head';
import OurCards from '../../../public/scripts/ourCard.js';
import MapboxMap from '../../../components/mapboxMap';
import Timeline from '../../../components/timeline';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { cardsData, events } from '@/public/scripts/data.js';
import { Spacer } from "@nextui-org/spacer";

function TravelPage({ params }: { params: { id: string } }) {
  return (
    <div className='grid grid-cols-2'>
      <div className='space-y-5'>
        <p className='text-xl'>Trip to {cardsData[+params.id].destination}</p>
        <p className='text-justify'>{cardsData[+params.id].description}</p>
        <Image className='max-h-96' alt='Image' src={cardsData[+params.id].image}/>
      </div>
      <Timeline events={events}/> 
      <MapboxMap/>
    </div>
  );
}

export default TravelPage;

