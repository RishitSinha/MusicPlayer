import React, {Component} from 'react';
import {View, TouchableNativeFeedback, Image} from 'react-native';
import styles from './HeaderStyles';
import AppText from "../Text/AppText";
import Icons from '../../../../Assets/icons';

export default class Header extends Component{
  render(){
    const {heading, back, playlist, player=false} = this.props;
    return(
      <View style={styles.headerSection}>
        {
          back &&
          <TouchableNativeFeedback onPress={() => back()}>
            <View>
              <Image
                style={styles.backIcon}
                source={{uri: Icons.back}}
              />
            </View>
          </TouchableNativeFeedback>
        }

        {
          player
            ?<View style={styles.playlistHeading}>
              <AppText type={'playlist'}>
                Playlist
              </AppText>
              <AppText type={'playlist_name'}>
                {heading}
              </AppText>
            </View>
            : <AppText type={'sectionHeading'}>
              {heading}
            </AppText>
        }

        {
          playlist &&
          <TouchableNativeFeedback onPress={() => playlist()}>
            <View style={styles.playlistIconContainer}>
              <Image
                style={styles.playlistIcon}
                source={{uri: Icons.back}}
              />
            </View>
          </TouchableNativeFeedback>
        }
      </View>
    )
  }
}

