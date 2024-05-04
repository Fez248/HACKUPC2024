// pages/index.js

import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function homePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <div className={styles.blur}></div>
        <img className={styles.heroImage} src='/images/homeHero.png' alt='heroImage'></img>
      </div> 

      {/* Content Grid */}
      <section className={styles.contentGrid}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
