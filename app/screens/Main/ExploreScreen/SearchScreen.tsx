import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { Theme, baseStyle, statusBarHeight, Colors, Layout } from '../../../theme';
import topGenres from '../../../mockdata/ourPicks.json';
import TouchableListItem from '../../../components/TouchableListItem';

import SvgSearch from '../../../components/icons/Svg.Search';
import ScrollView from '../../../components/view/ScrollView';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchScreen: React.FC = (props: any) => {
  const [search, setSearch] = useState('');
  let textInput = React.createRef<any>();

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    textInput.current.focus();
  }, [textInput.current]);

  return (
    <ScrollView
      // disableHeader
      headerComponent={
        <View style={{ flexDirection: 'row', backgroundColor: Theme.secondary, width: Layout.window.width }}>
          <TouchableOpacity
            style={{
              width: 40,
              justifyContent: 'center',
              alignContent: 'center',
              paddingLeft: 10,
              paddingRight: 10
            }}
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Icon name={'arrow-back'} color={Theme.tertiary} size={20} />
          </TouchableOpacity>
          <SearchBar
            searchIcon={<SvgSearch size={20} fill={Theme.tertiary} />}
            placeholderTextColor={Theme.tertiary}
            containerStyle={{
              flex: 1,
              backgroundColor: Theme.secondary,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              paddingRight: 40
            }}
            inputContainerStyle={{ backgroundColor: Theme.background, padding: 0, height: 40 }}
            inputStyle={{ ...baseStyle.heading5, color: Theme.tertiary }}
            ref={textInput}
            placeholder="Search for restaurants, dishes, and more..."
            onChangeText={updateSearch}
            value={search}
          />
        </View>
      }
      topComponent={
        <FlatList
          contentContainerStyle={styles.containerFlatlist}
          data={topGenres}
          keyExtractor={itemObj => itemObj.id.toString()}
          numColumns={2}
          renderItem={itemObj => {
            const { item } = itemObj;

            return (
              <TouchableListItem
                itemStyle={{
                  height: Layout.window.width / 6,
                  margin: 6,
                  paddingLeft: 12
                }}
                bgColor={item.color}
                onPress={() => null}
                title={item.title}
              />
            );
          }}
        />
      }
      stickyComponent={
        <View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: Theme.secondary,
                height: '100%',
                justifyContent: 'center'
              }}
            >
              <Text style={{ ...baseStyle.heading5, color: Theme.tertiary }}>Total Results</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    >
      <View>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>

        <Text style={{ ...baseStyle.heading5, color: Theme.backdrop }}>Hello</Text>
      </View>
    </ScrollView>
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
    backgroundColor: Theme.surface
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
export default SearchScreen;
