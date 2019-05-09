import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import logo from './logo.svg';
import { CardList } from './components/list/list.js';
import { CardDetail } from './components/card/card.js';
import data from './card-data.json';
import './App.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    maxHeight: '90vh',
    overflowY: 'auto'
  };
}

const styles = {
  paper: {
    position: 'absolute',
    outline: 'none',
    margin: 'auto'
  }
};

class Board extends React.Component {
  statusList = [{ id: 0, name: 'To Do' }, { id: 1, name: 'Done' }];

  constructor(props) {
    super(props);
    this.state = { board: data, modalVisible: false, openedCard: {} };
  }

  handleClickOnCard(card) {
    this.setState({ ...this.state, modalVisible: true, openedCard: card });
  }

  drop(event) {
    event.preventDefault();
    event.target.classList.remove('hover');
    let targetStatus = Number(event.target.id);
    let temporalState = this.state;
    let movedCard;

    let movedCardId = Number(event.dataTransfer.getData('cardId'));
    // event.target.appendChild(document.getElementById(data));
    temporalState.board = temporalState.board
      .map(status => {
        let newStatus = status;
        newStatus.cardList = newStatus.cardList.filter(card => {
          let isMovedCard = card.id === movedCardId;
          movedCard = isMovedCard ? card : movedCard;

          return !isMovedCard;
        });
        return newStatus;
      })
      .map(status => {
        if (status.id === targetStatus) {
          status.cardList.push(movedCard);
        }
        return status;
      });
    this.setState(temporalState);
  }

  handleClose = () => {
    this.setState({ ...this.state, modalVisible: false, openedCard: {} });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>

        <Modal open={this.state.modalVisible} onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <CardDetail card={this.state.openedCard} />
          </div>
        </Modal>

        <div className='board'>
          {this.state.board.map(status => {
            return (
              <div className='column' key={status.id}>
                <CardList
                  id={status.id}
                  name={status.name}
                  list={status.cardList}
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

const App = withStyles(styles)(Board);

export default App;
