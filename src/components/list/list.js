import React from 'react';
import { Card } from '../card/card.js';
import './list.css';

export class CardList extends React.Component {
  drag(event) {
    event.dataTransfer.setData('cardId', event.target.id);
  }

  allowDrop(event) {
    event.preventDefault();

    if (event.target.classList.contains('card-list')) {
      event.target.classList.add('hover');
      event.dataTransfer.dropEffect = 'all';
    }
    else {
      event.dataTransfer.dropEffect = 'none';
    }
  }

  dragLeave(event) {
    event.target.classList.remove('hover');
  }

  render() {
    return (
      <div
        id={this.props.id}
        className='card-list'
        onDragOver={this.allowDrop}
        onDragLeave={this.dragLeave}
        onDrop={this.props.onDrop}
      >
        <h1>{this.props.name}</h1>
        {this.props.list.map(card => {
          return (
            <Card
              key={card.id}
              card={card}
              onClick={() => this.props.onClick(card)}
              onDragStart={event => this.drag(event)}
            />
          );
        })}
      </div>
    );
  }
}
