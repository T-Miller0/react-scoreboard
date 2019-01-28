import React, { Component } from 'react';
import './App.css';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
    this.state.players = [
      {
        id: 1,
        name: player1,
        score: 0
      }
    ];
    }
    handleUserInput(filterText) {
      this.setState({filterText: filterText});
    };
    handleRowDelete(players) {
      var index = this.state.players.indexOf(product);
      this.setState(this.state.players);
    };

  };
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
