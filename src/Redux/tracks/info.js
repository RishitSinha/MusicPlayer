const initialState = {
  trackInfo: {},
};

export default (state=initialState, action) => {
  switch (action.type){
    case 'LOAD_TRACK_INFO': {
      return {
        ...state,
        trackInfo: {...action.payload},
      }
    }
    case 'LOAD_TRACKS': {
      console.log(action.payload[0]);
      return {
        ...state,
        trackInfo: {...action.payload[0]},
      }
    }
    default:
      return state;
  }
}

export const loadTrackInfo = info => ({
  type: 'LOAD_TRACK_INFO',
  payload: info
});