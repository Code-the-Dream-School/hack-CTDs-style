import React from "react";
import styles from "./SiteLinks.module.css";

const SiteLinks = () => {
  return (
    <div className={styles.Container}>
      <h1>Get Involved</h1>
      <div className={styles.Cards}>
        <div className={styles.Students}>
          <h3>For Students</h3>
          <p>
            Code the Dream courses cover programming basics to advanced web and
            mobile app design. Thanks to a partnership with Treehouse, many of
            our classes are now online, with support from mentors and our
            growing community.
          </p>
          <div className={styles.LinkButton}>
            <a href="/apply">Apply Now</a>
          </div>
        </div>
        <div className={styles.Community}>
          <h3>For Community</h3>
          <p>
            Code the Dream is committed to providing affordable, cutting-edge
            tech resources to increase effectiveness for nonprofits,
            entreprenuers, and organizations tackling social justice issues. Do
            you have tech needs? We may be able to help!
          </p>
          <div className={styles.LinkButton}>
            <a href="/apply">Work With Us</a>
          </div>
        </div>
        <div className={styles.Volunteers}>
          <h3>For Volunteers</h3>
          <p>
            Code the Dream Labs is a unique internship program that gives
            participants the opportunity to grow their programming skills.
            Volunteer today to support budding developers through ongoing
            mentoring or one-time workshops!
          </p>
          <div className={styles.LinkButton}>
            <a href="/apply">Volunteer</a>
          </div>
        </div>
      </div>
      <div className={styles.ThankYou}>
        <video autoPlay loop muted playsInline className={styles.Video}>
          <source src="/assets/Thank you (1).mp4" type="video/mp4" />
          {/* You can add additional video sources for compatibility */}
        </video>
        <div className={styles.ThankYouContent}>
          <h1>"Thank you for your support!</h1>
          <p>
            Code the Dream is made possible primarily by individual donors like
            you. We also thank the following institutions for their generous
            support.
          </p>
        </div>
        <div>{/* <!-- Sponsor logos COULD go here --> */}</div>
      </div>
    </div>
  );
};

export default SiteLinks;
