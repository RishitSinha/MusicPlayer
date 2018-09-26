import React, {Component} from 'react';
import {View, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Video from 'react-native-video';
import {audioBaseUrl} from "../../../Assets/config";
import {playNext, updatePlaybackInfo} from "../../Redux/tracks/nowPlaying";

class Player extends Component{
  render(){
    const {playing} = this.props.playerConfig;
    const {playing: nowPlaying, playbackInfo} = this.props.nowPlaying;
    const {playNext, playerConfig} = this.props;
    if(!nowPlaying.source){
      return <View/>;
    }

    return(
      <Video source={{uri: audioBaseUrl+nowPlaying.source}}
             ref={(ref) => {
               this.player = ref
             }}
             playInBackground={true}
             playWhenInactive={true}
             paused={!playing}
             audioOnly={true}
             onBuffer={this.onBuffer}
             onEnd={() => playNext(playerConfig)}
             onError={() => ToastAndroid.show('Load Failed', ToastAndroid.SHORT)}
             onProgress={this.onProgress} />
    )
  }

  onProgress = (info) => {
    const {duration} = this.props.nowPlaying.playing;
    const audioLength = Math.min(duration,info.seekableDuration);
    this.props.updatePlaybackInfo({
      buffered: Math.min(info.playableDuration/audioLength, 1),
      progress: Math.min(info.currentTime/audioLength, 1),
    });
  }
}


const mapStateToProps = state => ({
  playerConfig: state.playerConfig,
  nowPlaying: state.nowPlaying,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  updatePlaybackInfo: updatePlaybackInfo,
  playNext: playNext,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);