import React from 'react';
import { cardsData } from './data.js'; // Import the data
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import travelPage from '../../app/travel/[id]/page.tsx';
import homePage from '../../app/home/homePage.tsx';

import Link from 'next/link'; // Import Link from Next.js

const OurCard = ({ card }) => {
  return (
    <Link href={`/travel/${card.id}`}> {/* Use Link component from Next.js */}
      <a>
        <Card className='py-4' style={{width: "18rem"}}> 
          <CardBody className="overflow-visible py-2">
            <Image style={{paddingBottom: "10px"}} alt="Card background" src={card.image} width={270}/>
            <h4 className="font-bold text-large">{card.destination}</h4>
            <p className="text-tiny font-bold" style={{color: 'grey'}}>Made by {card.made_by}</p>
            <p className="text-medium font-bold">{card.description}</p>
          </CardBody>
        </Card>
      </a>
    </Link>
  );
};

const OurCards = () => {
  return (
    <div className="grid grid-cols-4 items-stretch">
      {cardsData.slice(0, 4).map((card) => (
        <OurCard className="grid-column" key={card.id} card={card} />
      ))}
    </div>
  );
};

export default OurCards;
