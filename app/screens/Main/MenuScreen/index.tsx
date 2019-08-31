import React, { useContext, useEffect, useState } from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Theme, Colors, baseStyle } from '../../../theme';
import { Card, Title, Subheading, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderBar } from '../../../components/headers/HeaderBar';
import { RootContext, dispatcher } from '../../../context';

import { NavigationType } from '../../../types';
import { addCartItem } from '../../../context/Rootcontext/actions';
import { Button } from 'react-native-elements';
import { getMenuData } from '../../../utils/getData';
interface Props {
  menuData: any;
  navigation: NavigationType;
}

const MenuScreen: React.FC<Props> = (props: Props) => {
  const scrollY = new Animated.Value(0);
  const [menuData, setMenuData] = useState<any>([]);
  const menuId = props.navigation.getParam('menu_id', null);
  const restaurantName = props.navigation.getParam('restaurant_name', null);

  const context = useContext(RootContext);
  const cartItems = context.state.cart.items;

  useEffect(() => {
    (async () => {
      const data = await getMenuData(menuId);
      setMenuData(data);
    })();
  }, [menuId]);

  const renderListItem = ({ item }: any) => {
    const { name, dish_image, amount_per_item, dish_id } = item;
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
                {/* <Subheading style={{ fontSize: 12 }}>QTY. {quantity}</Subheading> */}
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    color={Theme.text}
                    style={{ fontSize: 10, alignSelf: 'center', paddingRight: 4 }}
                    name="rupee"
                  />
                  <Subheading style={{ fontSize: 12 }}>{amount_per_item && amount_per_item}</Subheading>
                </View>
              </View>
              <View style={{ paddingBottom: 10, flex: 1, flexWrap: 'wrap' }}>
                <Button
                  onPress={() => {
                    let quantity = 0;
                    if (cartItems[dish_id] && cartItems[dish_id]['quantity']) {
                      quantity = cartItems[item.dish_id]['quantity'];
                    }

                    dispatcher.dispatch(
                      addCartItem({
                        ...item,
                        quantity: quantity + 1
                      })
                    );
                  }}
                  title={'Add to cart'}
                  titleStyle={{ color: Theme.text }}
                  buttonStyle={{ backgroundColor: Theme.textC }}
                />
              </View>
              <Divider />
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  };
  const bannerImageURI = menuData['featured_image'] ? menuData['featured_image'].uri : '';
  return (
    <React.Fragment>
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0, 2]}
        style={baseStyle.container}
      >
        <HeaderBar title={restaurantName || 'Menu'} />
        <ImageBackground
          source={{ uri: bannerImageURI }}
          style={{ ...baseStyle.spacer11, backgroundColor: Theme.secondary }}
        />
        <>
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
              <Text style={{ ...baseStyle.heading5, color: Theme.surface }}>Recommended</Text>
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
              <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Filter</Text>
            </TouchableOpacity>
          </View>
        </>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={menuData.menu_items}
          renderItem={renderListItem}
        />
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

export default MenuScreen;
