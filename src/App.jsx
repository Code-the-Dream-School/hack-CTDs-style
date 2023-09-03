import React from 'react'
import styles from './App.module.css';
import Header from './Header.jsx'
import Search from './Search.jsx'
import Hero from './Hero.jsx'
import Overview from './Overview.jsx'
import Links from './Links.jsx'
import Thanks from './Thanks.jsx'
import Blog from './Blog.jsx'
import Footer from './Footer.jsx'
import AOS from 'aos'
import "aos/dist/aos.css";

function App() {

  React.useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  const [searchClicked, setSearchClicked] = React.useState(true);

  const handleSetSearch = (value) => {
    setSearchClicked(value)
    console.log(searchClicked)
  }

  return (
    <div className={styles.appContainer}>
      <header className={styles.stuckHeader}>
        {searchClicked ? <Header 
          setClicked={handleSetSearch}
          /> : <Search
          setClicked={handleSetSearch}
          />
        }
      </header>
      <main data-aos="fade-up">
            <Hero />
            <Overview />
            <Links />
            <Thanks />
            <Blog />
      </main>
      <Footer/>
      {/*Current Use: Footer*/}
    </div>
  )
}

export default App
