import React, {Component} from 'react';
import {View, ScrollView, BackHandler, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-native';
import styles from './TrackListStyles';
import TrackListItem from './TrackListItem';
import Header from "../Basic/Header/Header";

class TrackList extends Component{
  constructor(){
    super();
    this.state = {
      exitWarning: false,
      goToPlayer: false,
    }
  }
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  render(){
    const {tracks} = this.props;
    const {playing: nowPlaying} = this.props.nowPlaying;
    const {playing} = this.props.playerConfig;
    if(this.state.goToPlayer){
      return <Redirect push to={'/player'} />
    }
    return(
      <View style={styles.trackList}>
        <Header
          heading={'All Tracks'}
          back={() => this.setState({goToPlayer: true})}
        />
        <ScrollView>
          {
            tracks.list.map((track, index) => (
              <TrackListItem
                key={'tracks'+index}
                playing={track.source === nowPlaying.source && playing}
                track={track}
              />
            ))
          }
        </ScrollView>
      </View>
    )
  }

  handleBackPress = () => {
    const {exitWarning} = this.state;
    if (!exitWarning) {
      this.setState(
        {exitWarning: true},
        () => ToastAndroid.show('Press back again to exit app.', ToastAndroid.SHORT)
      );
      setTimeout(() => this.setState({exitWarning: false}), 2000);
      return true;
    }
    return false;
  }

}


const mapStateToProps = state => ({
  tracks: state.tracks,
  nowPlaying: state.nowPlaying,
  playerConfig: state.playerConfig,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);