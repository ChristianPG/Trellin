import React from 'react';
import './card.css';

export function Card(props) {
  return (
    <div
      id={props.data.id}
      className='card'
      draggable='true'
      onClick={props.onClick}
      onDragStart={props.onDragStart}
    >
      <h4>{props.data.title}</h4>
      <p>{props.data.owner}</p>
    </div>
  );
}
