import React from 'react'
import Header from './Header.jsx'
import Search from './Search.jsx'
import Hero from './Hero.jsx'
import Overview from './Overview.jsx'
import Links from './Links.jsx'
import Thanks from './Thanks.jsx'
import Blog from './Blog.jsx'
import Footer from './Footer.jsx'
function App() {

  const [searchClicked, setSearchClicked] = React.useState(true);

  const handleSetSearch = (value) => {
    setSearchClicked(value)
    console.log(searchClicked)
  }

  return (
    <>
      {searchClicked ? <Header 
        setClicked={handleSetSearch}
      /> : <Search
        setClicked={handleSetSearch}
      />}
      <main>
        {/*Current use: image carousel*/}
        <Hero />
        {/*Current use: overview information/pitch*/}
        <Overview/>
        {/*Current use: Links to other site pages for all users*/}
        <Links/>
        <Thanks />
        <Blog />
      </main>
      <Footer/>
      {/*Current Use: Footer*/}
    </>
  )
}

export default App
