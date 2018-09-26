const initialState = {
  playlist: {
    name: '',
    tracks: [],
  },
  playing: {},
  played: [],
  playbackInfo: {},
};

export default (state=initialState, action) => {
  switch (action.type){
    case 'LOAD_TRACKS': {
      return {
        ...state,
        playlist: {
          name: 'All Tracks',
          tracks: action.payload,
        },
        playing: {
          ...action.payload[0]
        }
      }
    }
    case 'UPDATE_PLAYBACK_INFO': {
      return {
        ...state,
        playbackInfo: {
          ...state.playbackInfo,
          ...action.payload,
        }
      }
    }
    case 'PLAY_TRACK': {
      return {
        ...state,
        playing: action.payload,
        playbackInfo: state.playing.source === action.payload.source ? state.playbackInfo : {},
      }
    }
    case 'PLAY_NEXT_TRACK': {
      const {shuffle,repeat} = action.payload;
      let {played, playing, playlist} = state;
      const currentIndex = playlist.tracks.findIndex(track => track.source === playing.source);

      played = [...played,{...playing}];

      if(shuffle) {
        playing = playlist.tracks[parseInt(Math.random()*1000)%playlist.tracks.length]
      }
      else {
        if(currentIndex === playlist.tracks.length - 1){
          if(repeat){
            playing = playlist.tracks[0];
          }
        }
        else{
          playing = playlist.tracks[currentIndex+1];
        }
      }

      return {
        ...state,
        played,
        playing,
        playbackInfo: currentIndex === playlist.tracks.length - 1 && !repeat ? state.playbackInfo : {},
      }
    }
    case 'PLAY_PREV_TRACK': {
      let {played, playing} = state;
      if(played.length){
        playing = played.splice(-1)[0];
        return {
          ...state,
          played,
          playing,
          playbackInfo: {},
        }
      }
      return state;
    }
    default:
      return state;
  }
}

export const updatePlaybackInfo = info => ({
  type: 'UPDATE_PLAYBACK_INFO',
  payload: info,
});

export const playTrack = track => ({
  type: 'PLAY_TRACK',
  payload: track,
});

export const playNext = playerConfig => ({
  type: 'PLAY_NEXT_TRACK',
  payload: playerConfig,
});

export const playPrev = () => ({
  type: 'PLAY_PREV_TRACK',
});