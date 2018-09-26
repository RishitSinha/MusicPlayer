import {StyleSheet, Dimensions} from 'react-native';
const screen = Dimensions.get('window');
const [vw,vh]=[screen.width/100, screen.height/100];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trackControls: {
    flexDirection: 'row',
    width: 90*vw,
    marginLeft: 10*vw,
  },
  seekControls: {
    width: 90*vw,
    marginLeft: 10*vw,
  },
  trackControls_button: {
    backgroundColor: '#4449b1',
    height: 6.66*vh,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderLeftWidth: 0.1*vw,
    borderRightWidth: 0.1*vw,
  },
  disabled: {
    opacity: 0.5,
  },
  trackControls_icons: {
    height: '40%',
    flex: 1
  },
  playlistControls: {
    flexDirection: 'row',
    width: 90*vw,
    marginTop: 2*vh,
    marginLeft: 10*vw,
  },
  playlistControls_button: {
    height: 5*vh,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.25,
  },
  playlistControls_button_active: {
    opacity: 1,
  },
  playlistControls_icons: {
    height: '60%',
    flex: 1,
  },
  flip: {
    transform: [{rotateZ: '180deg'}]
  },
  seekInfo: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  seek: {
    width: '100%',
  },
  seekTrack: {
    height: 0.25*vh,
  },
  seekThumb: {
    height: 2*vh,
    width: 2*vh,
  },
  coverContainer: {
    height: 30*vh,
    width: 80*vw,
    marginTop: 2*vh,
    marginBottom: 2*vh,
    marginLeft: -2*vw,
  },
  vinylMockup: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  coverImage: {
    position: 'absolute',
    top: 4.25*vh,
    left: 12*vw,
    height: 21*vh,
    width: 39.75*vw,
  },
  trackInfo: {
    paddingLeft: 10*vw,
    marginTop: 4*vh,
    marginBottom: 6*vh,
  },
});

export default styles;