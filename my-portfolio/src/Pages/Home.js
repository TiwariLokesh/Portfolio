import React from 'react'
import Statusbar from '../Layout/Statusbar'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Data from '../Components/Data'
function Home() {

  return (
    <>
    <Statusbar></Statusbar>
    <Hero></Hero>
    {
    Data.map((row) => {
      return <Projects data={row}></Projects>
    })
  }
    </>
  )
}

export default Home