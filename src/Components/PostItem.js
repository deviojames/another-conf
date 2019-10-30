import React, {Fragment} from 'react';
import {TouchableHighlight} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ImageWithZoom from './ImageWithZoom';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

const Container = styled.View`
  flex: 1;
  margin-left: 10;
`;

const PostArea = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 15px;
`;

const PostOwnerDetailArea = styled.View`
  flex-direction: row;
  flex: 1;
`;

const ActionArea = styled.View`
  flex-direction: row;
  flex: 1;
  border-bottom-width: 0.5;
  padding-bottom: 5;
  border-bottom-color: #f2f2f2;
`;

const Avatar = styled.Image`
  border-radius: 50;
  width: 50;
  height: 50;
`;

const PostImage = styled(ImageWithZoom)`
  border-radius: 10;
  height: 150;
  margin: 10px 2px 2px 2px;
`;

const PostOwner = styled.Text`
  font-weight: 600;
  font-size: 16;
`;

const TimeAgoLabel = styled.Text`
  font-size: 16;
  color: #8e8e8e;
`;

const PostText = styled.Text`
  font-size: 14;
`;

const ClockIcon = styled(Icon)`
  color: #8e8e8e;
  padding-left: 5;
  padding-right: 1;
  right: 0;
`;

const ArrowDownIcon = styled(Icon)`
  color: #8e8e8e;
  right: 0;
`;

const ActionIcon = styled(Icon)`
  padding-left: 5;
  padding-right: 1;
  justify-content: center;
  align-items: center;
`;

const ActionItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

const ActionLable = styled.Text`
  font-size: 16;
  margin-left: 5;
  color: #8e8e8e;
`;

function PostItem({data}) {
  const postTime = new Date(data.timestamp);
  return (
    <TouchableHighlight onPress={() => alert('click')} underlayColor="#f2f2f2">
      <Fragment>
        <PostArea>
          <Avatar
            source={{
              uri: data.avatarUrl,
            }}
          />
          <Container>
            <PostOwnerDetailArea>
              <PostOwner>{data.owner}</PostOwner>
              <ClockIcon name="clock" size={16} />
              <TimeAgoLabel>{timeAgo.format(Date.now() - 60 * 1000, 'twitter')}</TimeAgoLabel>
            </PostOwnerDetailArea>
            <PostText numberOfLines={5}>{data.content}</PostText>
            {data.postImageUrl ? (
              <PostImage imageUrl={data.postImageUrl} />
            ) : null}
          </Container>
        </PostArea>
        <ActionArea>
          <ActionItem>
            <ActionIcon name="like" size={20} />
            <ActionLable>10</ActionLable>
          </ActionItem>
          <ActionItem>
            <ActionIcon name="bubble" size={20} />
            <ActionLable>10</ActionLable>
          </ActionItem>
        </ActionArea>
      </Fragment>
    </TouchableHighlight>
  );
}

export default PostItem;
