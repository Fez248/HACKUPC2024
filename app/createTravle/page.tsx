// pages/index.js

import Head from 'next/head';
import OurCards from '../../public/scripts/ourCard.js';
import homeHero from '/public/homeHero.png';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import MapComponent from '../../components/mapComponent';

export default function createPage() {
  return (
    <div>
      <Head>
        <title>Create Travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Create Travel</h1>
        <Card>
          <CardHeader>Travel Map</CardHeader>
          <CardBody>
            <MapComponent />
          </CardBody>
        </Card>
      </main>
    </div>
  );
}
