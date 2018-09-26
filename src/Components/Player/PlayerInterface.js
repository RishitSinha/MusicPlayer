import React, {Component} from 'react';
import {View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-native';
import Seek from './PlayerControls/Seek';
import TrackControls from './PlayerControls/TrackControls';
import PlaylistControls from './PlayerControls/PlaylistControl';
import Cover from './PlayerControls/Cover';
import Header from "../Basic/Header/Header";
import TrackInfo from './TrackInfo';
import styles from './PlayerStyles';

class PlayerInterface extends Component{
  constructor(){
    super();
    this.state = {
      goToPlaylist: false,
    }
  }
  render(){
    const {playlist} = this.props.nowPlaying;
    if(this.state.goToPlaylist){
      return <Redirect push to={'/'}/>
    }
    return(
      <View style={styles.container}>
        <Header
          heading={playlist.name}
          playlist={() => this.setState({goToPlaylist: true})}
          player={true}
        />
        <PlaylistControls history={this.props.history} />
        <Cover/>
        <TrackControls/>
        <TrackInfo/>
        <Seek/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInterface);