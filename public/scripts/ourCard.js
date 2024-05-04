import React from 'react';
import { cardsData } from './data.js'; // Import the data
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const OurCard = ({ card }) => {
  return (
    <Card className='py-4 rounded-none'> 
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{card.destination}</h4>
        <p className="text-tiny font-bold">{card.description}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          src={card.image}
          width={270}
        />
      </CardBody>
    </Card>
  );
};

const OurCards = () => {
  return (
    <section className="flex flex-wrap gap-3">
      {cardsData.slice(0,4).map((card) => (
        <OurCard key={card.id} card={card}/>
      ))}
    </section>
  );
};

export default OurCards;