import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from '../PlayerStyles';
import Slider from "react-native-slider";
import AppText from "../../Basic/Text/AppText";
import {parseTime} from "../../../Helpers/ParseTime";

class Seek extends Component{
  constructor(){
    super();
    this.state = {
      value: 0.2,
    }
  }

  render(){
    const {progress=0} = this.props.nowPlaying.playbackInfo;
    const {duration} = this.props.nowPlaying.playing;
    return(
      <View style={styles.seekControls}>
        <View style={styles.seekInfo}>
          <AppText type={'seekTime'}>{parseTime(Math.round(progress*duration))}</AppText>
          <AppText type={'seekTime'}>{parseTime(duration)}</AppText>
        </View>
        <Slider
          style={styles.seek}
          thumbStyle={styles.seekThumb}
          trackStyle={styles.seekTrack}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={'#4449b1'}
          maximumTrackTintColor={'rgba(0,0,0,0.1)'}
          thumbTintColor={'#4449b1'}
          value={progress}
          onValueChange={value => this.setState({ value })}
        />
      </View>
    )
  }
}


const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Seek);