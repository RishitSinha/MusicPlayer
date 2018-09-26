import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from '../PlayerStyles';
import images from '../../../../Assets/images';

class Cover extends Component{
  render(){
    const {playing: nowPlaying} = this.props.nowPlaying;
    return(
      <View style={styles.coverContainer}>
        <Image
          style={styles.vinylMockup}
          resizeMode={'contain'}
          source={{uri: images.vinylMockup}}
        />
        <Image
          style={styles.coverImage}
          resizeMode={'cover'}
          source={{uri: nowPlaying.cover}}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cover);