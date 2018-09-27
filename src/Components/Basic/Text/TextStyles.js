import {StyleSheet, Dimensions} from 'react-native';
const screen = Dimensions.get('window');
const [vw,vh]=[screen.width/100, screen.height/100];

const styles = StyleSheet.create({
  base: {
    fontSize: 7.5*vw,
    color: 'black'
  },
  sectionHeading: {
    fontSize: 6.66*vw,
    fontWeight: 'bold',
    flex: 1,
  },
  playlist: {
    fontSize: 4*vw,
    color: '#4449b1',
  },
  playlist_name: {
    fontSize: 6.66*vw,
    color: '#4449b1',
    fontWeight: 'bold'
  },
  trackList_name: {
    fontSize: 4*vw,
    fontWeight: 'bold',
  },
  trackList_artist: {
    fontSize: 4*vw,
    opacity: 0.5
  },
  seekTime: {
    fontSize: 3.5*vw,
    marginRight: 2.5*vw,
    color: '#4449b1'
  },
  trackName: {
    fontSize: 6.66*vw,
    fontWeight: 'bold',
    color: '#4449b1',
  },
  trackNameLight: {
    fontSize: 5*vw,
    // fontWeight: 'bold',
    color: '#fff',
  },
  artistName: {
    fontSize: 4.5*vw,
    color: '#4449b1',
    marginLeft: 0.5*vw,
    fontWeight: "200",
  },
  artistNameLight: {
    fontSize: 4*vw,
    color: '#fff',
    marginLeft: 0.5*vw,
    fontWeight: "100",
    opacity: 0.5,
  },
  trackInfoName: {
    fontWeight: 'bold',
    color: '#4449b1',
    fontSize: 7.5*vw,
    marginLeft: 10*vw,
    marginTop: -3*vh,
    marginBottom: 2*vh,
  },
  trackInfoArtist: {
    color: '#4449b1',
    fontSize: 6.66*vw,
    marginLeft: 10*vw,
    marginBottom: 2.5*vh,
  },
  trackInfoGenre: {
    fontSize: 5*vw,
    marginTop: vh,
    marginLeft: 10*vw,
  },
  trackInfoAlbum: {
    fontSize: 5*vw,
    marginTop: vh,
    marginLeft: 10*vw,
  },
  trackInfoTrackNumber: {
    fontSize: 5*vw,
    marginTop: vh,
    marginLeft: 10*vw,
  },
});

export default styles;