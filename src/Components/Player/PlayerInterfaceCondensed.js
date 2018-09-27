import React, {Component} from 'react';
import {View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-native';
import TrackControls from './PlayerControls/TrackControls';
import TrackInfoCondensed from './TrackInfoCondensed';
import styles from './PlayerStyles';

class PlayerInterfaceCondensed extends Component{
  render(){
    if(this.props.location.pathname==='/player'){
      return <View/>
    }
    return(
      <View style={styles.condensedPlayer}>
        <TrackInfoCondensed history={this.props.history}/>
        <TrackControls condensed={true}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInterfaceCondensed);