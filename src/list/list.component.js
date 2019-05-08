import React from 'react';
import { Card } from '../card/card.component.js';
import './list.css';

export class CardList extends React.Component {
  drag(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  allowDrop(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div
        id={this.props.name}
        className='card-list'
        onDragOver={this.allowDrop}
        onDrop={this.props.onDrop}
      >
        <h1>{this.props.name}</h1>
        {this.props.list.map(card => {
          return (
            <Card
              key={card.id}
              data={card}
              onClick={() => this.props.onClick(card.id)}
              onDragStart={event => this.drag(event)}
            />
          );
        })}
      </div>
    );
  }
}
