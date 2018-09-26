import React, {Component} from 'react';
import {TouchableNativeFeedback,View, Image} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from '../PlayerStyles';
import Icons from '../../../../Assets/icons';
import config, {toggleRepeat, toggleShuffle} from "../../../Redux/player/config";
import {loadTrackInfo} from "../../../Redux/tracks/info";

class PlaylistControl extends Component{
  render(){
    const {shuffle, repeat} = this.props.playerConfig;
    const {toggleShuffle, toggleRepeat, loadTrackInfo, nowPlaying} = this.props;
    return(
      <View style={styles.playlistControls}>
        <TouchableNativeFeedback onPress={() => this.props.history.push('/')}>
          <View style={[styles.playlistControls_button, styles.playlistControls_button_active]}>
            <Image
              style={styles.playlistControls_icons}
              resizeMode={'contain'}
              source={{uri: Icons.playlist}}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          loadTrackInfo(nowPlaying.playing);
          this.props.history.push('/info');
        }}>
          <View style={[styles.playlistControls_button, styles.playlistControls_button_active]}>
            <Image
              style={styles.playlistControls_icons}
              resizeMode={'contain'}
              source={{uri: Icons.info}}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => toggleShuffle()}>
          <View style={
            shuffle
              ? [styles.playlistControls_button, styles.playlistControls_button_active]
              : styles.playlistControls_button
          }>
            <Image
              style={styles.playlistControls_icons}
              resizeMode={'contain'}
              source={{uri: Icons.shuffle}}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => toggleRepeat()}>
          <View style={
            repeat
              ? [styles.playlistControls_button, styles.playlistControls_button_active]
              : styles.playlistControls_button
          }>
            <Image
              style={styles.playlistControls_icons}
              resizeMode={'contain'}
              source={{uri: Icons.repeat}}
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
  toggleShuffle: toggleShuffle,
  toggleRepeat: toggleRepeat,
  loadTrackInfo: loadTrackInfo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistControl);