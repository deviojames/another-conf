import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import {Modal, Animated, Text} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {TouchableOpacity} from 'react-native';

const PostImage = styled.Image`
  border-radius: 10;
  height: 150;
  margin: 10px 2px 2px 2px;
  z-index: 999;
`;

const ModalArea = styled.View`
  flex: 1;
  background-color: #000000;
`;

export default function ImageWithZoom({imageUrl}) {
  const images = [{url: imageUrl}];
  const [modalVisible, setModalVisible] = useState(false);
  function OnClose() {
    setModalVisible(false);
  }
  return (
    <Fragment>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <PostImage
          source={{
            uri: imageUrl,
          }}
        />
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent animationType="fade">
        <ModalArea>
          <ImageViewer
            imageUrls={images}
            backgroundColor="transparent"
            enableSwipeDown
            maxOverflow={0}
            renderIndicator={() => null}
            onSwipeDown={() => OnClose()}
          />
        </ModalArea>
      </Modal>
    </Fragment>
  );
}
