import React from "react";

import GamesFilter from "../../../pageComponents/Games/GamesFilter";
import GamesTable from "../../../pageComponents/Games/GamesTable";
import {fetchGames, deleteGame, updateGame, createGame, getGamesFromContentful} from "../../../../ducks/games";
import {connect} from "react-redux";

const mapStateToProps = (state, props) => ({
  games:state.games.games,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchGames:(payload) => dispatch(fetchGames(payload)),
  getGamesFromContentful:() => dispatch(getGamesFromContentful()),
  deleteGame:(id) => dispatch(deleteGame(id)),
  updateGame:(payload) => dispatch(updateGame(payload)),
  createGame:(payload) => dispatch(createGame(payload)),
})

@connect(mapStateToProps, mapDispatchToProps)


class Games extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
      mode:['month', 'month']
    };
  }


  componentDidMount() {
    let {fetchGame} = this.props
    fetchGame();
  }


  render() {
    let {games, deleteGame, updateGame, createGame, getGameFromContentful} = this.props;
    return(
      <div>
        <GamesFilter apiFn={this.props.fetchGames} />
        <GamesTable
          games={games}
          deleteGame = {deleteGame}
          updateGame = {updateGame}
          createGame = {createGame}
          getGamesFromContentful={getGamesFromContentful}
        />
      </div>
    )
  }
}


export default Games;
