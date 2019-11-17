import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story } from '../../../storybook/views';
import { ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { RootContext } from '../../context';
import PaymentProvider from '.';
import CONFIG from '../../config';

const StoryView: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const context = React.useContext(RootContext);
  const [filters, setFilters] = React.useState([]);

  return (
    <Story>
      <ScrollView>
        <Button
          title="Press to activate"
          onPress={() => {
            setVisible(true);
          }}
        />
        <Text>{JSON.stringify(CONFIG)}</Text>
      </ScrollView>
    </Story>
  );
};

storiesOf('PaymentProvider', module)
  .addDecorator((fn: () => any) => <StoryScreen>{fn()}</StoryScreen>)
  .add('PaymentProvider modal', () => <StoryView />);
