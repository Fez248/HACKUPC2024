// pages/index.js
import Head from 'next/head';
import OurCards from '../../../public/scripts/ourCard.js';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {useRouter} from 'next/router'

function TravelPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Travel Page {params.id}</h1>
      {/* Display the content here */}
    </div>
  );
}

export default TravelPage;