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

    handleAddEvent(evt) {
      var player = {
        id: id,
        name: "",
        score: 0
      }
      this.state.players.push(player);
      this.setState(this.state.products);
    }

    handlePlayerTable(evt) {
      var player = {
        id: evt.target.id,
        name: evt.target.name,
        score: evt.target.value
      };
      var players = this.state.players.slice();
      var newProducts = products.map(function(product) {
        for (var key in product) {
          if(key == player.name && player.id == player.id) {
            player[key] = player.value;
          }
        }
        return player;
      });
      this.setState({players:newPlayer})
    }
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
