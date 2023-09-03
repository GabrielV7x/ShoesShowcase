// import { useState } from 'react'
import Card from './jsx/card'
import Data from './jsx/data'
import Header from './jsx/header'
import Footer from './jsx/footer'
import Myroutes from './jsx/index'

function App() {
  const cardArray= Data.map((card) => {
    return (
      <Card
        key={card.id}
        img = {card.img}
        title = {card.title}
        text = {card.text}
      />
    )
  })

  return (
    <>
      < Header />

      <div className='cards_container'>
        {cardArray}
      </div>

      < Myroutes />
      < Footer />
    </>
  )
}

export default App
