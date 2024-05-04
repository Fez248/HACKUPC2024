import React from 'react';
import { cardsData } from './data.js'; // Import the data
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const OurCard = ({ card }) => {
  return (
    <Card className='py-4' style={{width: "18rem"}}> 
      <CardBody className="overflow-visible py-2">
        <Image style={{paddingBottom: "10px"}} alt="Card background" src={card.image} width={270}/>
        <h4 className="font-bold text-large">{card.destination}</h4>
<<<<<<< HEAD
        <p className="text-tiny font-bold" style={{color: 'grey'}}>Made by {card.made_by}</p>
=======
        <p className="text-tiny font-bold">Made by {card.made_by}</p>
>>>>>>> ab8963c (Modified cards)
        <p className="text-medium font-bold">{card.description}</p>
      </CardBody>
    </Card>
  );
};

const OurCards = () => {
  return (
    <section className="flex flex-wrap gap-4">
      {cardsData.slice(0,4).map((card) => (
        <OurCard key={card.id} card={card}/>
      ))}
    </section>
  );
};

export default OurCards;