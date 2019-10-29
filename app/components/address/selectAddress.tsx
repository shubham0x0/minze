import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar, Icon, Button } from 'react-native-elements';

import { Theme, Colors, baseStyle, activeOpacity } from '../../theme';
import { dispatcher } from '../../context';
import { IAddress } from '../../context/Rootcontext/reducers';
import { getLocationUpdate, reverseGeocoder, searchLocation } from '../../utils/getLocation';
import { selectCurrentAddress } from '../../context/Rootcontext/actions';

export interface ImenuItem {
  title: string;
  address?: string;
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
    <View style={{ flex: 6 }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.address}</Text>
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

interface Props {
  search: string;
  setSearch: (data: string) => void;
  savedAddresses: IAddress[];
  setEditData: (data: IAddress) => void;
  handleCloseButton: () => void;
  selected: number;
  setSelected: (i: number) => void;
}
export const SelectAddress: React.FC<Props> = (props: Props) => {
  const { search, setSearch } = props;
  const [searchResult, setSearchResult] = useState<any[]>([]);

  useEffect(() => {
    if (!search) return;
    (async () => {
      try {
        const searchResult = await searchLocation(search);
        setSearchResult(searchResult);
      } catch (err) {
        console.warn(err);
      }
    })();
  }, [search]);
  return (
    <React.Fragment>
      <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            ...baseStyle.heading3,
            color: Theme.darkText,
            marginBottom: 8
          }}
        >
          {'Select delivery location'}
        </Text>
        <Icon name="close" size={20} onPress={props.handleCloseButton} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar
          clearButtonMode={'always'}
          searchIcon={false}
          placeholderTextColor={Theme.tertiary}
          containerStyle={{
            width: '100%',
            backgroundColor: Theme.secondary,
            borderTopWidth: 0,
            padding: 0,
            margin: 0,
            borderBottomWidth: 0
          }}
          inputContainerStyle={{ backgroundColor: Theme.surface, padding: 0, margin: 0, height: 40 }}
          inputStyle={{ ...baseStyle.heading5, color: Theme.tertiary }}
          placeholder="Enter an address"
          onChangeText={setSearch}
          value={search}
        />

        <TouchableOpacity
          onPress={async () => {
            const position = await getLocationUpdate();
            if (position) {
              const getLocation = await reverseGeocoder(position.coords);
              props.setEditData({
                ...getLocation
              });
            }
          }}
          style={{
            paddingVertical: 20,
            flexDirection: 'row'
          }}
        >
          <Icon size={12} name="my-location" type="material" />
          <Text
            style={{
              ...baseStyle.heading5,
              paddingLeft: 20,
              color: Theme.darkText,
              textAlign: 'left'
            }}
          >
            Use Current location
          </Text>
        </TouchableOpacity>
        {/* <MapComponent markers={markers} region={region} setRegion={setRegion} /> */}
        {!search ? (
          <FlatList
            key={1}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 6 }}
            contentContainerStyle={styles.containerFlatlist}
            data={props.savedAddresses}
            keyExtractor={(item, index) => `${item}-${index}`}
            numColumns={1}
            renderItem={itemObj => (
              <TouchableListItem
                {...itemObj.item}
                isSelected={itemObj.index === props.selected}
                handleOnPress={() => {
                  props.setEditData(props.savedAddresses[itemObj.index]);
                }}
                handleOnSelected={() => {
                  props.setSelected(itemObj.index);
                }}
              />
            )}
          />
        ) : (
          <FlatList
            key={2}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 6 }}
            contentContainerStyle={styles.containerFlatlist}
            data={searchResult}
            keyExtractor={item => item.title.toString()}
            numColumns={1}
            renderItem={itemObj => (
              <TouchableListItem
                {...itemObj.item}
                handleOnSelected={() => {
                  props.setEditData(searchResult[itemObj.index]);
                }}
              />
            )}
          />
        )}
      </ScrollView>
      {props.selected !== -1 && !search && (
        <Button
          containerStyle={{ paddingTop: 20 }}
          title={'Select'}
          onPress={() => {
            dispatcher.dispatch(selectCurrentAddress(props.selected));
            props.handleCloseButton();
          }}
        />
      )}
    </React.Fragment>
  );
};

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
    color: Colors.grey,
    paddingTop: 8
  }
});
