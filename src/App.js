import React, {Component} from 'react';
import {StyleSheet, ToastAndroid, View, BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BackButton, NativeRouter, Redirect, Route, Switch} from 'react-router-native';
import {loadTracks} from "./Redux/tracks/tracks";
import Tracks from '../Assets/Tracks';
import TrackList from './Components/TrackList/TrackList';
import PlayerInterface from './Components/Player/PlayerInterface';
import Player from './Components/Player/Player';
import TrackInfo from './Components/TrackInfo/TrackInfo';

class App extends Component{
  componentDidMount() {
    this.loadTracks();
  }
  render() {
    return (
      <NativeRouter >
        <View style={styles.container}>
          <Player/>
          <BackButton>
            <Switch>
              {/*<Route exact path="/" render={() => <Redirect to={'/player'} />} />*/}
              <Route exact path="/" component={TrackList} />
              <Route path="/player" component={PlayerInterface} />
              <Route path="/info" component={TrackInfo} />
            </Switch>
          </BackButton>
        </View>
      </NativeRouter>
    );
  }

  loadTracks = () => this.props.loadTracks(Tracks.music.map(track => ({
    ...track,
    cover: 'http://unsplash.it/50'+parseInt(Math.random()*10),
  })));
}

const mapStateToProps = state => ({
  tracks: state.tracks,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  loadTracks: loadTracks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
