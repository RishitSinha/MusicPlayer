import React, {Component} from 'react';
import {TouchableNativeFeedback,View, Image} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from '../PlayerStyles';
import Icons from '../../../../Assets/icons';
import {togglePlay} from "../../../Redux/player/config";
import {playNext, playPrev} from "../../../Redux/tracks/nowPlaying";

class TrackControls extends Component{
  render(){
    const {togglePlay, playNext, playPrev, playerConfig, nowPlaying} = this.props;
    const {playing, repeat, shuffle} = playerConfig;
    const {played=[], playlist, playing: currentTrack} = nowPlaying;
    return(
      <View style={styles.trackControls}>
        <TouchableNativeFeedback
          disabled={!played.length}
          onPress={() => playPrev()}
        >
          <View style={
            played.length
              ? styles.trackControls_button
              : [styles.trackControls_button, styles.disabled]
          }>
            <Image
              style={[styles.trackControls_icons, styles.flip]}
              resizeMode={'contain'}
              source={{uri: Icons.next}}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => togglePlay()}>
          <View style={styles.trackControls_button}>
            <Image
              style={styles.trackControls_icons}
              resizeMode={'contain'}
              source={{uri: playing ? Icons.pause : Icons.play}}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          disabled={!repeat && !shuffle && currentTrack.source === playlist.tracks[playlist.tracks.length-1].source}
          onPress={() => playNext(playerConfig)}>
          <View style={
            !repeat && !shuffle && currentTrack.source === playlist.tracks[playlist.tracks.length-1].source
              ? [styles.trackControls_button, styles.disabled]
              : styles.trackControls_button
          }>
            <Image
              style={styles.trackControls_icons}
              resizeMode={'contain'}
              source={{uri: Icons.next}}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}


const mapStateToProps = state => ({
  playerConfig: state.playerConfig,
  nowPlaying: state.nowPlaying,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  togglePlay: togglePlay,
  playNext: playNext,
  playPrev: playPrev,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrackControls);