const initialState = {
  playing: false,
  shuffle: false,
  repeat: true,
};

export default (state=initialState, action) => {
  switch (action.type){
    case 'LOAD_TRACKS': {
      return {
        ...state,
        playing: false,
      }
    }
    case 'TOGGLE_PLAY': {
      return {
        ...state,
        playing: !state.playing
      };
    }
    case 'TOGGLE_SHUFFLE': {
      return {
        ...state,
        shuffle: !state.shuffle
      };
    }
    case 'TOGGLE_REPEAT': {
      return {
        ...state,
        repeat: !state.repeat
      };
    }
    case 'PLAY_TRACK': {
      return {
        ...state,
        playing: true,
      }
    }
    default:
      return state;
  }
}

export const togglePlay = () => ({
  type: 'TOGGLE_PLAY'
});

export const toggleShuffle= () => ({
  type: 'TOGGLE_SHUFFLE'
});

export const toggleRepeat = () => ({
  type: 'TOGGLE_REPEAT'
});