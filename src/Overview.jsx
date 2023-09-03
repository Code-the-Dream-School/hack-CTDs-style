import React from 'react';
import styles from './Overview.module.css';

export default function Overview() {
  return (
    <div className={styles.container}>
        <div className='header'>
            <h1>Welcome to Code the Dream</h1>
        </div>
        <div className={styles.content}>
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/c_w1BkcODW0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            ></iframe>
            <p className={styles.text}>
            Code the Dream offers free intensive training in software
            development to people from diverse low-income backgrounds.
            In CTD Labs, our coders work with experienced mentors to
            hone those skills by building apps and technology platforms
            for a range of startups, nonprofits and government clients.
            The ultimate aim of Code the Dream is to create a unique
            win-win, where our coders gain real experience building apps
            that make the world a little better place, and then use that
            experience to launch new careers with enormous opportunity
            for themselves, their families, and their communities.
            </p>
        </div>
    </div>
  );
}
