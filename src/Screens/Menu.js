/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, Platform, Modal, Image, Dimensions} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const StyledScrollView = styled.ScrollView`
  padding: 15px;
`;

const Container = styled.View`
  flex: 1;
  /* position: absolute; */
  /* height: ${Dimensions.get('window').height};
  width: ${Dimensions.get('window').width}; */
  background-color: black;
`;

const FullScreenBtn = styled.TouchableOpacity`
  background-color: green;
`;

const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  top: 10;
  z-index: 999;
  background-color: #555753;
  width: 80;
  height: 50;
  border-radius: 10;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

const FullScreenBtnLabel = styled.Text`
  color: #fff;
`;

function Menu() {
  const [isFullScreen, setFullScreen] = useState(false);
  const [videoPaused, setVideoPaused] = useState(true);
  function switchToFullScreen() {
    if (isFullScreen) {
      setFullScreen(false);
      setVideoPaused(true);
    } else {
      setFullScreen(true);
      setVideoPaused(false);
    }
  }
  return (
    <StyledScrollView>
      {isFullScreen ? (
        <Container>
          {/* {Platform.OS === 'android' ? (
          <CloseBtn onPress={() => switchToFullScreen()}>
            <FullScreenBtnLabel>CLOSE</FullScreenBtnLabel>
          </CloseBtn>
        ) : null} */}
          <Video
            source={{
              uri:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            }} // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
            rate={1}
            resizeMode="contain"
            controls
            fullscreenOrientation="landscape"
            onFullscreenPlayerWillPresent={() => setVideoPaused(false)}
            paused={videoPaused}
            fullscreen={true}
          />
        </Container>
      ) : null}
      <FullScreenBtn onPress={() => switchToFullScreen()}>
        <Icon name="control-play" size={25} color="#fff" />
        <Image
          style={{width: 3, height: 50}}
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          }}
        />
      </FullScreenBtn>
    </StyledScrollView>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').width,
    minWidth: Dimensions.get('window').height,
    minHeight: Dimensions.get('window').width,
  },
});

export default Menu;
