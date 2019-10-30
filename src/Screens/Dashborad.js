/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const DATA = [
  {
    cover: 'https://facebook.github.io/react/logo-og.png',
    title: '1',
  },
  {
    cover: 'https://facebook.github.io/react/logo-og.png',
    title: '2',
  },
  {
    cover: 'https://facebook.github.io/react/logo-og.png',
    title: '3',
  },
  {
    cover: 'https://facebook.github.io/react/logo-og.png',
    title: '3',
  },
];

const upcoming = [
  {title: 'Meetup Show new technology 2019 Meetup Show new technology 2019'},
  {title: 'Meetup Show new technology 2019 2'},
];

const leader = [
  {cover: 'https://facebook.github.io/react/logo-og.png'},
  {cover: 'https://facebook.github.io/react/logo-og.png'},
  {cover: 'https://facebook.github.io/react/logo-og.png'},
  {cover: 'https://facebook.github.io/react/logo-og.png'},
];

const {width, height} = Dimensions.get('window');

const HighlightView = styled.View`
  width: ${width / 2 - 14};
  margin: 2px;
`;
const CoverImage = styled.Image`
  width: ${width / 2 - 14};
  height: 100;
  border-radius: 5;
`;

const Title = styled.Text`
  margin-top: 5;
  font-size: 24;
  font-weight: 400;
`;

const UpcomingText = styled.Text`
  flex: 8;
  font-size: 17;
`;

const StyledScrollView = styled.ScrollView`
  padding: 15px;
`;

const TimeBadge = styled.Text`
  color: #ffffff;
  border-radius: 2;
  padding: 2px;
  background-color: #8e8e93;
`;

const UpcomingEventContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 5;
`;

const Avatar = styled.Image`
  border-radius: 50;
  width: 55;
  height: 55;
  margin: 2px;
`;

const StyledIcon = styled(Icon)`
  flex: 1;
  width: 25;
`;

function HighlightItem({data}) {
  return (
    <HighlightView>
      <CoverImage
        source={{
          uri: data.cover,
        }}
      />
    </HighlightView>
  );
}

function UpcomingEventItem({data}) {
  return (
    <UpcomingEventContainer>
      {/* <TimeBadge>11:10 PM</TimeBadge> */}
      <UpcomingText numberOfLines={1}>{data.title}</UpcomingText>
      <StyledIcon name="arrow-right-circle" size={25} />
    </UpcomingEventContainer>
  );
}

function LeaderRank({data}) {
  return (
    <UpcomingEventContainer>
      <Avatar
        source={{
          uri: data.cover,
        }}
      />
    </UpcomingEventContainer>
  );
}

function DashBoard() {
  return (
    <Fragment>
      <StyledScrollView>
        {/* <AdaptiveHeader title="Mor" /> */}
        <FlatList
          data={DATA}
          renderItem={({item}) => <HighlightItem data={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          scrollEnabled={false}
        />
        <Title>Upcoming events</Title>
        <FlatList
          data={upcoming}
          renderItem={({item}) => <UpcomingEventItem data={item.data} />}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
        <Title>Speakers</Title>
        <FlatList
          data={leader}
          renderItem={({item}) => <LeaderRank data={item} />}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          horizontal
        />
      </StyledScrollView>
    </Fragment>
  );
}

export default DashBoard;
