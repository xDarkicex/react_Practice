import {combineReducers} from 'redux'

const songsReducer = () => {
  return [{
    title: 'No Scrubs',
    duration: '4:03'
  },
  {
    title: 'Break Something',
    duration: '2:32'
  },
  {
    title: 'All Star',
    duration: '1:34'
  },
  {
    title: 'Funcy Monkey',
    duration: '2:30'
  }
]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})