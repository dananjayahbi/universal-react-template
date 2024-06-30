import React from 'react'
import SectionCard1 from './components/SectionCard1'
import Elements1 from './components/Elements1'
import SectionCard2 from './components/SectionCard2'

const Home = () => {
  return (
    <>
      <div style={{marginTop: "20px"}}>
        <hr />
        <SectionCard1 />
        <hr />
      </div>
      <div style={{marginTop: "20px"}}>
        <hr />
        <Elements1 />
        <hr />
      </div>
      <div style={{marginTop: "20px"}}>
        <hr />
        <SectionCard2 />
        <hr />
      </div>
    </>
  )
}

export default Home