import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../storybook/views';
import OverlayMenu from '.';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';

const menuData = [
  {
    title: 'Feedback',
    handleOnPress: () => {},
    children: <Text>Give Your Valueable Feedback</Text>
  },
  {
    title: 'About',
    subtitle: 'Build with ❤️ by Shubham Jain <github.com/shubhamxy>',
    handleOnPress: () => {}
  },
  {
    title: 'Version',
    handleOnPress: () => {}
  },
  {
    title: 'Server Status',
    handleOnPress: () => {}
  },
  {
    title: 'AuthToken',
    handleOnPress: () => {}
  }
];

const StoryView: React.FC = props => {
  const [visible, setVisible] = React.useState(true);
  return (
    <Story>
      <OverlayMenu menuData={menuData} toggleDialog={() => {}} visible={visible} />
      <Button
        title="press"
        onPress={() => {
          setVisible(true);
        }}
      />
    </Story>
  );
};

storiesOf('OverlayMenu', module)
  .addDecorator((fn: () => any) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Modal OverlayMenu', () => <StoryView />);
