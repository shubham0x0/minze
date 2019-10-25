import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story } from '../../../storybook/views';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { RootContext } from '../../context';
import PaymentProvider from '.';

const StoryView: React.FC = () => {
  const [visible, setVisible] = React.useState(true);
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
      </ScrollView>
      <PaymentProvider
        currentDelivery={context.state.currentDelivery}
        savedAddresses={paymentProviders}
        handleCloseButton={() => {
          setVisible(false);
        }}
        visible={visible}
      />
    </Story>
  );
};

storiesOf('PaymentProvider', module)
  .addDecorator((fn: () => any) => <StoryScreen>{fn()}</StoryScreen>)
  .add('PaymentProvider modal', () => <StoryView />);
