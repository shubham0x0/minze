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
  const paymentProviders: any[] = [
    {
      title: 'Paytm',
      subtitle: 'Pay via Patm',
      image: require('../../assets/images/payments/paytm.png')
    },
    {
      title: 'Debit/Credit Card',
      subtitle: 'Pay via Debit/Credit card',
      image: require('../../assets/images/payments/debit-card.png')
    },
    {
      title: 'Cash on Delivery',
      subtitle: 'Pay via Cash on Delivery',
      image: require('../../assets/images/payments/cod.png')
    }
  ];
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
      <PaymentProvider
        currentDelivery={context.state.currentDelivery}
        paymentMethods={paymentProviders}
        handleCloseButton={() => {
          setVisible(false);
        }}
        selected={-1}
        visible={visible}
      />
    </Story>
  );
};

storiesOf('PaymentProvider', module)
  .addDecorator((fn: () => any) => <StoryScreen>{fn()}</StoryScreen>)
  .add('PaymentProvider modal', () => <StoryView />);
