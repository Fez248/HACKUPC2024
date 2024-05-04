// pages/index.js

import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import OurCards from '../../public/scripts/ourCard.js';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function homePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <div className={styles.blur}></div>
        <Image className={styles.heroImage} src='/images/homeHero.png' alt='heroImage'></Image>
      </div> 

      <p className='text-left mt-3 mb-3'>RECOMENDADO PARA TI</p>
      <OurCards/>
    </div>
  );
}
