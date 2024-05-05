import MapboxMap from '../../../components/mapboxMap';
import Timeline from '../../../components/timeline'
import { Card, CardHeader, CardBody, Image, Avatar } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { cardsData, events } from '@/public/scripts/data.js';
import { Spacer } from "@nextui-org/spacer";
import { routesArray } from '../../../public/data/routedata2';
import { Avatars } from '../../../components/avatars';

function TravelPage({ params }: { params: { id: string } }) {
  return (
    <div className='grid grid-cols-2'>
      <div className='space-y-5'>
        <p  className=' text-2xl'> {cardsData[+params.id].destination}</p>
        <Avatars/>
        <p className='text-justify'>{cardsData[+params.id].description}</p>
        <Image className='max-h-96' alt='Image' src={cardsData[+params.id].image}/>
      </div>
      
      <Timeline events={events}/> 
      <div className='w-3/4'><MapboxMap info={routesArray[parseInt(params.id)]}/></div>
    </div>
  );
}

export default TravelPage;

