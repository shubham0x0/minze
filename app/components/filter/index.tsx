import React from 'react';
import {
  Platform,
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';
import Dialog, { DialogContent, ScaleAnimation, SlideAnimation } from 'react-native-popup-dialog';
import { Theme, Layout, baseStyle, activeOpacity } from '../../theme';
import { Icon } from 'react-native-elements';

interface Ifilter {
  id: string;
  title: string;
  type: string;
  options: IfilterOption[];
  selected: any[];
}
interface IfilterOption {
  title: string;
  order?: any[];
}
const FilterMenu = (props: { visible: any; handleCloseButton?: any; useFilters: [Ifilter[], any] }) => {
  const { visible } = props;
  const [filters, setFilters] = props.useFilters;

  const handleCloseButton = () => {
    props.handleCloseButton(false);
  };

  const TouchableListItem = (itemObj: Ifilter, index: number) => {
    const filter = filters[index];

    const handleSelection = (item: any, idx: number) => {
      if (idx in filter.selected) {
        const sel = filter.selected.filter((i: number) => i !== idx);
        filter.selected = sel;
      } else {
        filter.selected.concat(idx);
      }
      filters[index] = { ...filter };
      setFilters(filters);
    };

    return (
      <>
        <Text
          style={{
            ...baseStyle.heading3,
            color: Theme.darkText,
            paddingVertical: 20,
            paddingLeft: 20
          }}
        >
          {itemObj.title}
        </Text>
        <FlatList
          key={1}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 6 }}
          contentContainerStyle={styles.containerFlatlist}
          data={itemObj.options}
          keyExtractor={(item, index) => `${item}-${index}`}
          numColumns={1}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.touchableitem}
              activeOpacity={activeOpacity}
              onPress={() => handleSelection(item, index)}
            >
              <View style={{ flex: 4 }}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Icon
                disabledStyle={{ display: 'none' }}
                disabled={!(index in filter.selected)}
                containerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                color={Theme.primary}
                name="check"
                size={20}
              />
            </TouchableOpacity>
          )}
        />
      </>
    );
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
          height: Layout.window.height / 1.1,
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
            {'Select Filter'}
          </Text>
          <Icon name="close" size={20} onPress={handleCloseButton} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            key={1}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 6 }}
            contentContainerStyle={styles.containerFlatlist}
            data={filters}
            keyExtractor={(item, index) => `${item}-${index}`}
            numColumns={1}
            renderItem={({ item, index }) => <TouchableListItem index={index} itemObj={item} />}
          />
        </ScrollView>
      </DialogContent>
    </Dialog>
  );
};

export default FilterMenu;

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
