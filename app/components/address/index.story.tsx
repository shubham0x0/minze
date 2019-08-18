import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../storybook/views';
import { Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import AddressMenu from '.';
import { RootContext } from '../../context';

const StoryView: React.FC = props => {
  const [visible, setVisible] = React.useState(true);
  const context = React.useContext(RootContext);
  return (
    <Story>
      <ScrollView>
        <Text>---{JSON.stringify(context.state.currentDelivery, null, 4)}---</Text>
        <Button
          title="Press to activate"
          onPress={() => {
            setVisible(true);
          }}
        />
        <Text>{JSON.stringify(context.state.savedAddresses, null, 4)}</Text>
      </ScrollView>
      <AddressMenu
        currentDelivery={context.state.currentDelivery}
        savedAddresses={context.state.savedAddresses}
        handleCloseButton={() => {
          setVisible(false);
        }}
        visible={visible}
      />
    </Story>
  );
};

storiesOf('address', module)
  .addDecorator((fn: () => any) => <StoryScreen>{fn()}</StoryScreen>)
  .add('address modal', () => <StoryView />);
