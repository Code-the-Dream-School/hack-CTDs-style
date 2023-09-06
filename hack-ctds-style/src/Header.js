import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <video autoPlay loop muted playsInline>
        <source src="/assets/video(1080p).mp4" type="video/mp4" />
        Your browser doesnt support video!
      </video>

      <div className={styles["headerContent"]}>
        {/* Navigation bar */}
        <nav className={styles.nav}>
          <div className={styles.logo}>
            {" "}
            <img
              src="assets/ctd-logosmall.png"
              alt="Logo"
              style={{ height: "7vh", margin: "14px" }}
            />
            <h1 style={{ color: "#fff", marginRight: "2px", fontSize: "15px" }}>
              CODE <br /> THE DREAM
            </h1>
          </div>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/get-involved">Get Involved</a>
          <a href="/services">Services</a>
          <a href="/class-info">Class Info</a>
          <a href="/blog">Blog</a>
          <a href="/donate">Donate</a>
          <button>Search</button>
        </nav>
        <div className={styles.Defination}>
          <h1>Code the Dream</h1>
          <h2>Real Talent. Real Experience. Real Impact.</h2>
        </div>
        <div className={styles.ClassApp}>
          <button>Classes</button>
          <button>Need an Application?</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
