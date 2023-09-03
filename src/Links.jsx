import React from 'react';
import styles from './Links.module.css';

export default function Links() {
  return (
    <div>
        <div className={styles.headContainer}>
            <h1 className={styles.header}>Get Involved</h1>
        </div>
        <div className={styles.container}>
            <div className={`${styles.text} ${styles.block1}`}>
                <h3>For Students</h3>
                <p className={styles.content}>
                    Code the Dream courses cover programming basics to
                    advanced web and mobile app design. Thanks to a
                    partnership with Treehouse, many of our classes are now
                    online, with support from mentors and our growing
                    community.
                </p>
                <button className={styles.button}>Apply Now</button>
            </div>
            <div className={`${styles.text} ${styles.block2}`}>
                <h3>For Community</h3>
                <p className={styles.content}>
                    Code the Dream is committed to providing affordable,
                    cutting-edge tech resources to increase effectiveness
                    for nonprofits, entreprenuers, and organizations
                    tackling social justice issues. Do you have tech needs?
                    We may be able to help!
                </p>
                <button className={styles.button}>Work With Us</button>
            </div>
            <div className={`${styles.text} ${styles.block3}`}>
                <h3>For Volunteers</h3>
                <p className={styles.content}>
                    Code the Dream Labs is a unique internship program that
                    gives participants the opportunity to grow their
                    programming skills. Volunteer today to support budding
                    developers through ongoing mentoring or one-time
                    workshops!
                </p>
                <button className={styles.button}>Volunteer</button>
            </div>
        </div>
  </div>
  );
}
