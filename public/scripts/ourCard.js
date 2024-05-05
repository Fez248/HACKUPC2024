import React from 'react';
import { cardsData } from './data.js';
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from 'next/link';

const OurCard = ({ card }) => {
  return (
    <Link href={`/travel/${card.id}`}>
      <>
        <Card className="py-4" style={{ width: "18rem", height: "450px", marginBottom: 20}}> {/* Tailwind doesn't control external component dimensions directly */}
          <CardBody className="grid grid-rows-2">
            <div className='relative h-225px overflow-hidden flex justify-center items-center'>
              <Image alt="Card background" src={card.image} wrapp/>
            </div>
            <div className='text-justify'>
              <h4 className="font-bold text-lg">{card.destination}</h4>
              <p className="text-xs font-bold text-gray-300">Made by {card.made_by}</p>
              <p className="text-m font-bold"> {card.brief} </p>
            </div>
          </CardBody>
        </Card>
      </>
    </Link>
  );
};

const OurCards = () => {
  return (
    <div className="grid grid-cols-4 items-stretch gap-4">
      {cardsData.slice(0, 11).map((card) => (
        <OurCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default OurCards;
