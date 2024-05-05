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
    <div className='w-full h-full flex-col mx-auto'>
    <div className='w-full h-52 flex flex-col justify-end rounded-xl' style={{ 
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${cardsData[+params.id].image})`, 
      backgroundSize: 'fill', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }}>
      <p className='text-3xl title'> {cardsData[+params.id].destination}</p>
    </div>
    <div className='grid grid-cols-3 w-fill pt-8'>
      <div className='space-y-5 col-span-2' >
        <p className=' text-xs text-stone-600'>fellow travellers:</p>
        <Avatars/>
        <p className='text-justify'>{cardsData[+params.id].description}</p>
      </div>
      <div className=' pt-24'><Timeline events={events}/></div> 
      <div className='w-3/4 col-span-2'><MapboxMap info={routesArray[parseInt(params.id)]}/></div>
    </div>
    </div>
  );
}

export default TravelPage;

