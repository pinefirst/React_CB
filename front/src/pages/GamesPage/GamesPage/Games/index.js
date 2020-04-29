import React from 'react'

import connect from "react-redux/es/connect/connect"

import './style.scss'
import GamesTable from '../../../pageComponents/Games/GamesTable'
import GamesFilter from '../../../pageComponents/Games/GamesFilter'


//DB Browser
import { fetchGames, deleteGame, updateGame, createGame,getGamesFromContentful } from './../../../../ducks/games';

const mapStateToProps = (state, props) => ({
  games: state.games.games,
  // user: state.user.profile,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchGames: (payload) => dispatch(fetchGames(payload)),
  getGamesFromContentful: () => dispatch(getGamesFromContentful()),
  deleteGame: (id) => dispatch(deleteGame(id)),
  updateGame: (payload) => dispatch(updateGame(payload)),
  createGame: (payload) => dispatch(createGame(payload)),
})

@connect(mapStateToProps, mapDispatchToProps)

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
      mode: ['month', 'month'],

    };
  }

  componentDidMount () {
    let {
      fetchGames,
    }  = this.props
    fetchGames();
  }
  render() {
    let {
      games,
      deleteGame,
      updateGame,
      createGame,
      getGamesFromContentful,
    } = this.props

    return (
      <div>
        <GamesFilter
          apiFn={this.props.fetchGames}
        />

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

export default Games
