import React from 'react';
import logo from './logo.svg';
import { CardList } from './list/list.component';
import data from './card/card-data.json';
import './App.css';

class App extends React.Component {
  statusList = [{ id: 0, name: 'To Do' }, { id: 1, name: 'Done' }];
  initialList = data;

  constructor(props) {
    super(props);
    this.state = { cardList: data };
  }

  handleClickOnCard(cardId) {
    console.log(this.state);

    this.setState({ ...this.state, cardList: [] });
  }

  drop(event) {
    event.preventDefault();
    console.log(event.target.id);

    let cardId = Number(event.dataTransfer.getData('text'));
    // event.target.appendChild(document.getElementById(data));
    let newCardList = this.state.cardList.map(card => {
      let newCard = card;
      console.log(cardId);
      console.log(newCard.id);

      if (newCard.id === cardId) {
        newCard.status = event.target.id;
      }

      return newCard;
    });
    this.setState({
      ...this.state,
      cardList: newCardList
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>

        <div className='board'>
          {this.statusList.map(status => {
            return (
              <div className='column' key={status.id}>
                <CardList
                  name={status.name}
                  list={this.state.cardList.filter(
                    card => card.status === status.name
                  )}
                  onClick={cardId => this.handleClickOnCard(cardId)}
                  onDrop={event => this.drop(event)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
