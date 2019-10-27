import React, { useState } from 'react';
import { Platform, View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Dialog, { DialogContent, ScaleAnimation, SlideAnimation } from 'react-native-popup-dialog';
import { Theme, Layout, baseStyle, activeOpacity } from '../../theme';
import { Icon, Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native-paper';

export interface ImenuItem {
  title: string;
  subtitle?: string;
  image: any;
  isSelected: boolean;
  handleOnSelected?: () => void;
  handleOnPress?: () => void;
  children?: React.ReactChild;
}

const TouchableListItem = (item: ImenuItem) => (
  <TouchableOpacity
    style={styles.touchableitem}
    activeOpacity={activeOpacity}
    onLongPress={item.handleOnPress}
    onPress={item.handleOnSelected}
  >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: 30 }}>
      <Image style={{ width: 60, height: 60 }} source={item.image} />
    </View>
    <View style={{ flex: 4 }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      {item.children}
    </View>
    <Icon
      onPress={item.handleOnSelected}
      disabledStyle={{ display: 'none' }}
      disabled={!(item.handleOnSelected && item.isSelected)}
      containerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      color={Theme.primary}
      name="check"
      size={20}
    />
  </TouchableOpacity>
);
const PaymentProvider = (props: {
  currentDelivery: any;
  visible: any;
  handleCloseButton?: any;
  paymentMethods: ImenuItem[];
  selected: any;
}) => {
  const { visible } = props;
  const handleCloseButton = () => {
    props.handleCloseButton();
  };

  return (
    <Dialog
      containerStyle={{ backgroundColor: 'transparent' }}
      animationDuration={Platform.OS === 'ios' ? 500 : 800}
      onTouchOutside={handleCloseButton}
      dialogAnimation={Platform.OS === 'ios' ? new ScaleAnimation() : new SlideAnimation({ slideFrom: 'bottom' })}
      visible={visible}
      {...props}
    >
      <DialogContent
        style={{
          width: Layout.window.width / 1.1,
          height: Layout.window.height / 1.5,
          backgroundColor: Theme.background,
          borderRadius: 0
        }}
      >
        <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              ...baseStyle.heading3,
              color: Theme.darkText,
              marginBottom: 8
            }}
          >
            {'Select Payment Provider'}
          </Text>
          <Icon name="close" size={20} onPress={props.handleCloseButton} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            key={1}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 6 }}
            contentContainerStyle={styles.containerFlatlist}
            data={props.paymentMethods}
            keyExtractor={(item, index) => `${item}-${index}`}
            numColumns={1}
            renderItem={itemObj => (
              <TouchableListItem
                {...itemObj.item}
                isSelected={itemObj.index === props.selected[0]}
                handleOnPress={() => {}}
                handleOnSelected={() => {
                  props.selected[1](itemObj.index);
                }}
              />
            )}
          />
        </ScrollView>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentProvider;

const styles = StyleSheet.create({
  containerFlatlist: {},
  touchableitem: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: Theme.surface,
    borderRadius: 6,
    marginBottom: 4
  },
  title: {
    ...baseStyle.heading4,
    color: Theme.darkText
  },
  subtitle: {
    ...baseStyle.heading5,
    paddingTop: 8
  }
});
