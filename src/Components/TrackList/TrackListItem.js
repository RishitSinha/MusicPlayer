import React, {Component} from 'react';
import {TouchableNativeFeedback,View, Image} from 'react-native';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-native';
import {bindActionCreators} from 'redux';
import styles from './TrackListStyles';
import AppText from "../Basic/Text/AppText";
import {playTrack} from "../../Redux/tracks/nowPlaying";

class TrackList extends Component{
  constructor(){
    super();
    this.state = {
      redirectToPlayer: false,
    }
  }
  render(){
    const {track, playing} = this.props;
    const {redirectToPlayer} = this.state;
    if(redirectToPlayer){
      return <Redirect push to={'/player'} />
    }
    return(
      <TouchableNativeFeedback onPress={() => this.playTrack(track)}>
        <View style={
          playing
            ? [styles.trackInfo, styles.currentlyPlayingTrack]
            : styles.trackInfo
        }>
          <View style={styles.trackInfo_cover}>
            <Image
              style={styles.trackInfo_coverImage}
              source={{uri: track.cover}}
            />
          </View>
          <View style={styles.trackInfo_text}>
            <AppText
              heading={true}
              type={'trackList_name'}
            >
              {track.title}
            </AppText>
            <AppText
              type={'trackList_artist'}
            >
              {track.artist}
            </AppText>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }

  playTrack = track => {
    this.props.playTrack(track);
    this.setState({
      redirectToPlayer: true
    })
  }
}


const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  playTrack: playTrack,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);