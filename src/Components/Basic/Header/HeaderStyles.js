import {StyleSheet, Dimensions} from 'react-native';
const screen = Dimensions.get('window');
const [vw,vh]=[screen.width/100, screen.height/100];

const styles = StyleSheet.create({
  headerSection: {
    marginLeft: 10*vw,
    marginTop: 10*vh,
    marginBottom: 5*vh,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 4*vh,
    width: 4*vh,
    marginTop: 0.75*vh,
    marginRight: 5*vw,
  },
  playlistIconContainer: {
    height: 4*vh,
    width: 4*vh,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5*vw,
    transform: [{rotateZ: '-90deg'}],
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.25)',
    borderRadius: 2.5*vh,
    paddingRight: 0.25*vh,
  },
  playlistIcon: {
    height: 3*vh,
    width: 3*vh,
  },
  playlistHeading: {
    flex: 1,
    height: 5*vh,
  }
});

export default styles;