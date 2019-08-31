import React, { useContext } from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Theme, Colors, Layout, baseStyle, activeOpacity } from '../../../theme';
import { Card, Title, Subheading, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderBar } from '../../../components/headers/HeaderBar';
import { RootContext, dispatcher } from '../../../context';
import { addCartItem, removeCartItem } from '../../../context/Rootcontext/actions';

interface Props {}

const CartScreen: React.FC = (props: Props) => {
  const scrollY = new Animated.Value(0);
  const context = useContext(RootContext);
  const cartItems = context.state.cart.items;
  const cartData: any = Object.values(cartItems);

  const renderListItem = ({ item }: any) => {
    const { name, dish_image, amount_per_item, quantity } = item;
    return (
      <Card style={{ paddingTop: 20, backgroundColor: Theme.background }}>
        <Card.Content>
          <View style={{ flexDirection: 'row' }}>
            <ImageBackground
              style={{ height: 100, width: 100 }}
              source={{ uri: dish_image.uri || 'https://b.zmtcdn.com/images/developers/apihome_bg.jpg' }}
            />
            <View style={{ flex: 1, flexWrap: 'wrap', paddingLeft: 20, paddingRight: 20 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title>{name}</Title>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Subheading style={{ fontSize: 18 }}>QTY. {quantity}</Subheading>
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    color={Theme.text}
                    style={{ fontSize: 18, alignSelf: 'center', paddingRight: 4 }}
                    name="rupee"
                  />
                  <Subheading style={{ fontSize: 18 }}>{amount_per_item && amount_per_item * quantity}</Subheading>
                </View>
              </View>
              <View style={{ paddingBottom: 10, flex: 1, flexWrap: 'wrap' }}>
                <View style={{ flexDirection: 'row', paddingTop: 6, justifyContent: 'space-between' }}>
                  <Icon
                    onPress={() => {
                      let qty = 0;
                      if (cartItems[item.dish_id] && cartItems[item.dish_id]['quantity']) {
                        qty = cartItems[item.dish_id]['quantity'];
                      }
                      if (qty <= 1) {
                        dispatcher.dispatch(
                          removeCartItem({
                            dish_id: item.dish_id
                          })
                        );
                      } else {
                        dispatcher.dispatch(
                          addCartItem({
                            ...item,
                            quantity: qty - 1
                          })
                        );
                      }
                    }}
                    size={12}
                    color={Theme.text}
                    style={{ backgroundColor: Colors.grey, color: Theme.textC, padding: 10 }}
                    name="minus"
                  />
                  <Text
                    style={{
                      color: Theme.text,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      padding: 10,
                      paddingTop: 6,
                      paddingBottom: 6
                    }}
                  >
                    {' '}
                    Add
                  </Text>
                  <TouchableOpacity style={{ backgroundColor: Colors.grey }}>
                    <Icon
                      onPress={() => {
                        let qty = 0;
                        if (cartItems[item.dish_id] && cartItems[item.dish_id]['quantity']) {
                          qty = cartItems[item.dish_id]['quantity'];
                        }
                        dispatcher.dispatch(
                          addCartItem({
                            ...item,
                            quantity: qty + 1
                          })
                        );
                      }}
                      size={12}
                      color={Theme.text}
                      style={{
                        backgroundColor: Colors.grey,
                        color: Theme.textC,
                        padding: 10
                      }}
                      name="plus"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Divider />
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <React.Fragment>
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0, 2]}
        style={baseStyle.container}
      >
        <HeaderBar title={'Cart'} />
        <View style={{ ...baseStyle.spacer11, backgroundColor: Theme.secondary }} />
        <>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              backgroundColor: Theme.surface
            }}
          >
            <Text style={[baseStyle.cursiveBold5, { color: Theme.text }]}>Total</Text>
            <TouchableOpacity activeOpacity={activeOpacity} onPress={() => null} style={{ flexDirection: 'row' }}>
              <Icon size={16} name={'rupee'} color={Theme.text} />
              <Text style={[baseStyle.cursiveBold5, { color: Theme.text, marginLeft: 10 }]}>990</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: Theme.backdrop,
                height: '100%',
                justifyContent: 'center'
              }}
            >
              <Text style={{ ...baseStyle.heading5, color: Theme.surface }}>Select Payment Method</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: Theme.surface,
                height: '100%',
                justifyContent: 'center'
              }}
            >
              <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
        {cartData && (
          <FlatList keyExtractor={(item, index) => index.toString()} data={cartData} renderItem={renderListItem} />
        )}
      </Animated.ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  containerSearchBar: {},
  searchPlaceholder: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: 3,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 0
  },
  searchPlaceholderText: {
    ...baseStyle.cursive5,
    color: Theme.background
  },
  headerText: {
    ...baseStyle.cursiveBold5,
    color: Colors.white,
    marginLeft: 24
  },
  sectionHeading: {
    ...baseStyle.cursiveBold3,
    color: Colors.white,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16
  },
  containerFlatlist: {
    marginLeft: 24
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    backgroundColor: Theme.surface
  }
});

export default CartScreen;
