import React from 'react';
import styles from './Blog.module.css';
import GDITTitle from './assets/GDIT-Title-Card.jpg'
import workDevPic from './assets/Education-Workforce-Development-1-1536x864.png'
import wordCloud from './assets/bhm-word-cloud.jpg'

export default function Thanks() {
  return (
    <div>
        <div className={styles.headContainer}>
            <h1 className={styles.header}>From the Blog</h1>
        </div>
        <div className={styles.container}>
            <div className={styles.postContainer}>
                <img
                    width="200"
                    height="200"
                    src={GDITTitle}
                />
                <h3>RECAP: Gender Diversity in Tech</h3>
                <h5>April 24, 2023</h5>
                <p className={styles.text}>
                    Throughout March and April, Code The Dream (CTD)
                    hosted Gender Diversity In Tech, a series on why
                    gender diversity …
                </p>
                <button>Continue Reading</button>
            </div>
            <div className={styles.postContainer}>
                <img
                    width="200"
                    height="200"
                    src={workDevPic}
                />
                <h3>
                How to Navigate a Male-Dominated Workspace | Gender
                Diversity In Tech Series
                </h3>
                <h5>April 2, 2023</h5>
                <p className={styles.text}>
                On March 23, Code The Dream hosted a skill-building
                workshop on "how to navigate a male-dominated
                workspace" for women, …
                </p>
                <button>Continue Reading</button>
            </div>
            <div className={styles.postContainer}>
                <img
                    width="200"
                    height="200"
                    src={wordCloud}
                />
                <h3>
                Who Inspires You? Personal Tributes to Black Heroes.
                </h3>
                <h5>February 24, 2023</h5>
                <p className={styles.text}>
                In honor of Black History Month, we asked our
                students, apprentices, and staff about Black figures
                who have impacted …
                </p>
                <button>Continue Reading</button>
            </div>
        </div>
    </div>
  );
}