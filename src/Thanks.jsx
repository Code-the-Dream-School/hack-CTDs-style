import React from 'react';
import styles from './Thanks.module.css';
import tinaVid from './assets/tina-turner.mp4'


export default function Thanks() {
  return (
    <div className={styles.container}>
        <div className={styles.tint}>
            <div className={styles.headContainer}>
                <h1 className={styles.header}>Thank You!</h1>
            </div>
            <div className={styles.content}>
                <div>
                    <video autoPlay muted loop>
                        <source src={tinaVid} type='video/mp4'/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p>
                    Code the Dream is made possible primarily by individual
                    donors like you.
                </p>
            </div>
            </div>
    </div>
  );
}