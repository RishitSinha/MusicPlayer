const initialState = {
  list: [
    'Track ',
    'Track ',
    'Track ',
    'Track ',
    'Track ',
  ],
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'LOAD_TRACKS': {
      return {
        ...state,
        list: action.payload,
      }
    }
    default:
      return state;
  }
}

export const loadTracks = tracks => ({
  type: 'LOAD_TRACKS',
  payload: tracks,
});
