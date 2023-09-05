import React from "react";
import "./App.module.css";
import Header from "./Header";
import Overview from "./Overview";
import SiteLinks from "./SiteLinks";
import Blogs from "./Blogs";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Header />
        <main>
          <Overview />
          {/* <!-- Current use: Links to other site pages for all users --> */}
          <SiteLinks />
          <Blogs />
        </main>
      </div>
    </>
  );
}

export default App;
