import React from 'react';
import { cardsData } from './data.js'; // Import the data
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import travelPage from '../../app/travel/[id]/page.tsx';
import homePage from '../../app/home/homePage.tsx';

import Link from 'next/link'; // Import Link from Next.js

const OurCard = ({ card }) => {
  return (
    <Link href={`/travel/${card.id}`}> {/* Use Link component from Next.js */}
        <Card className='py-4' style={{width: "18rem"}}> 
          <CardBody className="overflow-visible py-2">
            <Image style={{paddingBottom: "10px"}} alt="Card background" className='aspect-square, object-cover w-52 h-52' src={card.image}/>
            <h4 className="font-bold text-large">{card.destination}</h4>
            <p className="text-tiny font-bold" style={{color: 'grey'}}>Made by {card.made_by}</p>
            <p className="text-md font-bold line-clamp-1">{card.description}</p>
          </CardBody>
        </Card>
    </Link>
  );
};

const OurCards = () => {
  return (
    <div className="grid grid-cols-4 items-stretch">
      {cardsData.slice(0, 4).map((card) => (
        <OurCard className="grid-column aspect-square" key={card.id} card={card} />
      ))}
    </div>
  );
 };
 


export default OurCards;
