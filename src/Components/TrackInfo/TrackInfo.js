import React, {Component} from 'react';
import {View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-native';
import Cover from './Cover';
import Header from "../Basic/Header/Header";
import styles from './TrackInfoStyles';
import AppText from "../Basic/Text/AppText";

class TrackInfo extends Component{
  constructor(){
    super();
    this.state = {
      goToPlaylist: false,
    }
  }
  render(){
    const {trackInfo} = this.props.trackInfo;
    return(
      <View style={styles.container}>
        <Header
          heading={'Track Info'}
          back={() => this.props.history.goBack()}
        />
        <Cover
          trackCover={trackInfo.cover}
        />
        <AppText type={'trackInfoName'}>
          {trackInfo.title}
        </AppText>
        <AppText type={'trackInfoArtist'}>
          {trackInfo.artist}
        </AppText>
        <AppText type={'trackInfoAlbum'}>
          Album: {trackInfo.album}
        </AppText>
        <AppText type={'trackInfoGenre'}>
          Genre: {trackInfo.genre}
        </AppText>
        <AppText type={'trackInfoTrackNumber'}>
          Track Number: {trackInfo.trackNumber}
        </AppText>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  trackInfo: state.trackInfo,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrackInfo);