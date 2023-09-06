import React from "react";
import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <>
      <div className={styles.Blogs}>
        <h1>Blogs Highlights</h1>
        <div className={styles.BlogsContents}>
          <div>
            <img
              width="200"
              height="200"
              src="assets/GDIT-Title-Card.jpg"
              alt="Title-Card"
            />
            <h3>RECAP: Gender Diversity in Tech</h3>
            <h5>April 24, 2023</h5>
            <p>
              Throughout March and April, Code The Dream (CTD) hosted Gender
              Diversity In Tech, a series on why gender diversity …
            </p>
            <button>Continue Reading</button>
          </div>
          <div>
            <img
              width="200"
              height="200"
              src="assets/Education-Workforce-Development-1-1536x864.png"
              alt="Education-Workforce-Development"
            />
            <h3>
              How to Navigate a Male-Dominated Workspace | Gender Diversity In
              Tech Series
            </h3>
            <h5>April 2, 2023</h5>
            <p>
              On March 23, Code The Dream hosted a skill-building workshop on
              "how to navigate a male-dominated workspace" for women, …
            </p>
            <button>Continue Reading</button>
          </div>
          <div>
            <img
              width="200"
              height="200"
              src="assets/bhm-word-cloud.jpg"
              alt="bhm-word-cloud"
            />
            <h3>Who Inspires You? Personal Tributes to Black Heroes.</h3>
            <h5>February 24, 2023</h5>
            <p>
              In honor of Black History Month, we asked our students,
              apprentices, and staff about Black figures who have impacted …
            </p>
            <button>Continue Reading</button>
          </div>
        </div>

        <div className={styles.footer}>
          <footer>
            <p>
              Copyright © 2023 Code the Dream · All Rights Reserved · Website by
              Code the Dream & (Manizha Khorram)
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Blogs;
