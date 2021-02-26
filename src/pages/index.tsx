import Head from 'next/head'
import React from 'react';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicío | Move.it</title>
      </Head>

     <ExperienceBar />
      
      <section>
        <CountdownProvider>
          
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
        
          <div>
            <ChallengeBox />
          </div>

        </CountdownProvider>
      </section>

    </div>
  )
}
