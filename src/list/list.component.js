
import React from 'react';
import data from '../card/card-data.json';
import { Card } from '../card/card.component.js';

export class CardList extends React.Component {
  getCardData() {
    return data;
  }

  render() {
    let initialList = this.getCardData();
    return (
      <div className="card-list">
        {this.props.name}
        {
          initialList.map((card) => {
            return <Card key={card.id} data={card} />
          })
        }
      </div>
    );
  }
}