import { useState } from 'react'
import Card from './jsx/card'

function App() {
  // console.log(<Card />);
  return (
    <>
      <Card
        img = 'src/assets/images/img1.jpg'
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />


    </>
  )
}

export default App
