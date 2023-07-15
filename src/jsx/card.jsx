import React from 'react'

export default function Card(props) {
  // console.log(<Card />);
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} className="card-img-top" alt="..." />
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}
