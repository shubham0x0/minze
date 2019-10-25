import React, { useEffect } from 'react';
import { Platform, Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Dialog, { DialogContent, ScaleAnimation, SlideAnimation } from 'react-native-popup-dialog';

import { Theme, Colors, Layout, baseStyle, activeOpacity } from '../../theme';
import { Icon } from 'react-native-elements';

export interface ImenuItem {
  title: string;
  subtitle?: string;
  handleOnPress: () => void;
  children?: React.ReactChild;
}

const TouchableListItem = (item: ImenuItem) => (
  <TouchableOpacity activeOpacity={activeOpacity} onPress={item.handleOnPress} style={[{ ...styles.touchableitem }]}>
    <Text numberOfLines={3} ellipsizeMode={'tail'} style={[styles.title, { color: Theme.darkText }]}>
      {item.title}
    </Text>
    {item.subtitle && (
      <Text
        numberOfLines={2}
        ellipsizeMode={'tail'}
        style={[styles.subtitle, { color: Colors.grey, padding: 20, paddingLeft: 0 }]}
      >
        {item.subtitle}
      </Text>
    )}

    {item.children}
  </TouchableOpacity>
);

const OverlayMenu = (props: { title?: string; menuData: ImenuItem[]; visible: any; toggleDialog?: any }) => {
  const { title, menuData, visible, toggleDialog } = props;
  useEffect(
    () => () => {
      toggleDialog();
    },
    []
  );

  return (
    <Dialog
      containerStyle={{ backgroundColor: 'transparent' }}
      animationDuration={Platform.OS === 'ios' ? 500 : 800}
      onTouchOutside={toggleDialog}
      dialogAnimation={Platform.OS === 'ios' ? new ScaleAnimation() : new SlideAnimation({ slideFrom: 'bottom' })}
      visible={visible}
      {...props}
    >
      <DialogContent
        style={{
          width: Layout.window.width / 1.2,
          height: Layout.window.height / 1.4,
          backgroundColor: Theme.background,
          borderRadius: 0
        }}
      >
        <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              ...baseStyle.heading1,
              color: Theme.darkText,
              textAlign: 'left',
              marginBottom: 8,
              padding: 4
            }}
          >
            {title || ''}
          </Text>
          <Icon name="close" onPress={toggleDialog} />
        </View>
        <FlatList
          key={1}
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={styles.containerFlatlist}
          data={menuData}
          keyExtractor={item => item.title.toString()}
          numColumns={1}
          renderItem={itemObj => <TouchableListItem {...itemObj.item} />}
        />
      </DialogContent>
    </Dialog>
  );
};

export default OverlayMenu;

const styles = StyleSheet.create({
  containerFlatlist: {},
  touchableitem: {
    borderRadius: 6,
    borderBottomWidth: 2,
    borderBottomColor: Theme.surface,
    flex: 1,
    paddingBottom: 12,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    marginBottom: 6,
    minHeight: 50
  },
  subtitle: {
    ...baseStyle.heading5
  },
  title: {
    ...baseStyle.heading4,
    paddingRight: 20
  }
});
