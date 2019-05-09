import React from 'react';
import './card.css';

export function Card(props) {
  return (
    <div
      id={props.card.id}
      className='card'
      draggable='true'
      onClick={props.onClick}
      onDragStart={props.onDragStart}
    >
      <h4>{props.card.title}</h4>
      <p>{props.card.owner}</p>
    </div>
  );
}

export function CardDetail(props) {
  return (
    <div id={props.card.id} className='card-detail'>
      <h2>{props.card.title}</h2>
      <h3>{props.card.description}</h3>
      <h4>Owner:</h4>
      <p>{props.card.owner}</p>
      <h4>Creation Date:</h4>
      <p>{new Date(props.card.creationDate).toString()}</p>
    </div>
  );
}
