import {combineReducers} from 'redux';
import tracks from './tracks/tracks';
import nowPlaying from './tracks/nowPlaying';
import playerConfig from './player/config';
import trackInfo from './tracks/info';

const reducers = combineReducers({
  tracks,
  nowPlaying,
  playerConfig,
  trackInfo,
});

export default reducers;