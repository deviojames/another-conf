import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Color from '../Style/Color';

const TimeBadge = styled.Text`
  width: 55px;
  margin-right: 5px;
  margin-top: 3px;
  padding: 5px;
  background-color: ${Color.first};
  color: ${Color.white};
  border-radius: 15;
  justify-content: center;
  align-self: flex-start;
  text-align: center;
`;

const Title = styled.Text`
  flex: 1;
  font-size: 16;
  font-weight: 400;
  padding-left: 5px;
`;

const Content = styled.Text`
  font-size: 14;
  font-weight: 200;
`;

const IconContainer = styled.View`
  background-color: ${Color.first};
  padding: 0px;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 100px;
`;

const StyledIcon = styled(Icon)`
  align-self: center;
`;

const ContentDetailView = styled.View`
  flex: 1;
  border-left-width: 5px;
  margin-left: 16px;
  border-left-color: ${Color.first};
  padding-left: 10;
  padding-bottom: 15px;
`;

const TimeAndDot = styled.View`
  flex: 1;
`;

const HeaderView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SpeakerText = styled.Text`
  color: ${Color.third};
`;

function Timeline({data}) {
  return (
    <Fragment>
      <HeaderView>
        <TimeBadge>{data.time}</TimeBadge>
        <TimeAndDot>
          <HeaderView>
            <IconContainer>
              <StyledIcon name="event" size={20} color={Color.white} />
            </IconContainer>
            <Title numberOfLines={1}>{data.title}</Title>
          </HeaderView>
          <ContentDetailView>
            <SpeakerText>
              {`Speakers: ${data.speakers.map(speaker => speaker)}`}
            </SpeakerText>
            <Content>{data.description}</Content>
          </ContentDetailView>
        </TimeAndDot>
      </HeaderView>
    </Fragment>
  );
}

export default Timeline;
