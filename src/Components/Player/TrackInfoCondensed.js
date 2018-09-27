import React, {Component} from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from './PlayerStyles';
import AppText from "../Basic/Text/AppText";

class TrackInfoCondensed extends Component{
  render(){
    const {playing: nowPlaying} = this.props.nowPlaying;
    return(
      <TouchableNativeFeedback
        onPress={() => this.props.history.push('/player')}
      >
        <View style={styles.trackInfoCondensed}>
          <AppText type={'trackNameLight'}>
            {nowPlaying.title}
          </AppText>
          <AppText type={'artistNameLight'}>
            {nowPlaying.artist}
          </AppText>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrackInfoCondensed);