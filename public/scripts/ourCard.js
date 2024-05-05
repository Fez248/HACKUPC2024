import React from 'react';
import { cardsData } from './data.js';
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from 'next/link';

const OurCard = ({ card }) => {
  return (
    <Link href={`/travel/${card.id}`}>
      <>
        <Card className="py-4" style={{ width: "18rem", height: "450px" }}> {/* Tailwind doesn't control external component dimensions directly */}
          <CardBody className="flex flex-col justify-between overflow-visible py-2 h-full">
            <Image 
              alt="Card background" 
              src={card.image} 
              width="100%" 
              height="150"  
              className="object-cover" 
            />
            <div className="flex flex-col justify-between h-full">
              <h4 className="font-bold text-lg">{card.destination}</h4>
              <p className="text-xs font-bold text-gray-500">Made by {card.made_by}</p>
              <p className="text-sm font-bold overflow-hidden overflow-ellipsis">
                {card.description}
              </p>
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
