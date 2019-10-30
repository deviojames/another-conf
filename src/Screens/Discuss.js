import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import PostItem from '../Components/PostItem';

const StyledScrollView = styled.ScrollView``;

const data = [
  {
    postId: 1,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    owner: 'Moragan Timber',
    avatarUrl: 'https://facebook.github.io/react/logo-og.png',
    postImageUrl: 'https://facebook.github.io/react/logo-og.png',
    timestamp: '2019-09-18T08:08:06+0000',
    likeBy: [{id: 1, name: 'Jessica loveis'}, {id: 2, name: 'Balora Klien'}],
  },
  {
    postId: 2,
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content",
    owner: 'Moragan Timber',
    avatarUrl: 'https://facebook.github.io/react/logo-og.png',
    postImageUrl: '',
    timestamp: '2019-09-18T08:08:06+0000',
    likeBy: [{id: 1, name: 'Jessica loveis'}, {id: 2, name: 'Balora Klien'}],
  },
  {
    postId: 3,
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    owner: 'Moragan Timber',
    avatarUrl: 'https://facebook.github.io/react/logo-og.png',
    postImageUrl: '',
    timestamp: '2019-09-18T08:08:06+0000',
    likeBy: [{id: 1, name: 'Jessica loveis'}, {id: 2, name: 'Balora Klien'}],
  },
];

function Discuss() {
  return (
    <StyledScrollView>
      <FlatList
        data={data}
        renderItem={({item}) => <PostItem data={item} />}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </StyledScrollView>
  );
}

export default Discuss;
