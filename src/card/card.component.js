import React from 'react';
import './card.css'

export function Card(props) {
  console.log(props);
  
  return (
    <div className="card">
      <h4>{props.data.title}</h4>
      <p>{props.data.owner}</p>
    </div>
  );
}
