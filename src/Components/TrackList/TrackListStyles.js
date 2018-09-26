import {StyleSheet, Dimensions} from 'react-native';
const screen = Dimensions.get('window');
const [vw,vh]=[screen.width/100, screen.height/100];

const styles = StyleSheet.create({
  trackList: {
    flex: 1,
    width: 100*vw,
    backgroundColor: 'white',
  },
  trackInfo: {
    flexDirection: 'row',
    width: 100*vw,
    paddingLeft: 10*vw,
    height: 13*vh,
    alignItems: 'center'
  },
  currentlyPlayingTrack: {
    backgroundColor: '#edf1f2'
  },
  trackInfo_cover: {
    height: 8*vh,
    width: 8*vh,
    marginRight: 2.5*vh
  },
  trackInfo_coverImage: {
    height: '100%',
    width: '100%',
  },
  trackInfo_text: {
    height: '60%',
    justifyContent: 'space-around',
  }
});

export default styles;