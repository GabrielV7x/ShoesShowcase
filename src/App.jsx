import { useState } from 'react'
import Card from './jsx/card'
import Data from './jsx/data'

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
    {cardArray}
    </>
  )
}

export default App
