/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Timeline from '../Components/Timeline';
import styled from 'styled-components';

const StyledScrollView = styled.ScrollView`
  padding: 15px;
`;

const data = [
  {
    id: 1,
    time: '09:00',
    speakers: ['Jason Monte'],
    title: 'Event 1',
    description: 'You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.',
  },
  {
    id: 2,
    time: '10:45',
    speakers: ['Jason Monte'],
    title: 'Event 2',
    description: 'You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.',
  },
  {
    id: 3,
    time: '12:00',
    speakers: ['Jason Monte', 'Luna Monte'],
    title: 'Event 3',
    description: 'You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.',
  },
  {
    id: 4,
    time: '14:00',
    speakers: ['Jason Monte'],
    title: 'Event 4',
    description: 'EYou’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.',
  },
  {
    id: 5,
    time: '16:30',
    speakers: ['Jason Monte'],
    title: 'Event 5',
    description: 'We’ve taken Lorem Ipsum to the next level with our HTML-Ipsum tool. As you can see, this Lorem Ipsum is tailor-made for websites and other online projects that are based in HTML. Most web design projects use Lorem Ipsum excerpts to begin with, but you always have to spend an annoying extra minute or two formatting it properly for the web.',
  },
];

function Event() {
  return (
    <StyledScrollView>
      <FlatList
        data={data}
        renderItem={({item}) => <Timeline data={item} />}
        keyExtractor={item => item.id}
      />
    </StyledScrollView>
  );
}

export default Event;
