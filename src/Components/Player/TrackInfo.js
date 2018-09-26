import React, {Component} from 'react';
import {View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from './PlayerStyles';
import AppText from "../Basic/Text/AppText";

class TrackInfo extends Component{
  render(){
    const {playing: nowPlaying} = this.props.nowPlaying;
    return(
      <View style={styles.trackInfo}>
        <AppText type={'trackName'}>
          {nowPlaying.title}
        </AppText>
        <AppText type={'artistName'}>
          {nowPlaying.artist}
        </AppText>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrackInfo);