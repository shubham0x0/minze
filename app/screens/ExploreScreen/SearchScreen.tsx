import React, { useState, useEffect } from 'react';
import { View, FlatList, ImageBackground, Text } from 'react-native';
import { Theme, baseStyle, Colors, Layout } from '../../theme';
import { Card, Title, Subheading, Divider } from 'react-native-paper';
import ListAnimated from '../../components/loaders/List';
import filtersData from '../../mockdata/filters.json';
import SvgSearch from '../../components/icons/Svg.Search';
import ScrollView from '../../components/view/ScrollView';
import { SearchBar, Icon } from 'react-native-elements';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_RESTAURANT } from '../../graphql/queries';
import FilterMenu from '../../components/filter';

const SearchScreen: React.FC = (props: any) => {
  const [search, setSearch] = useState('');
  const textInput = React.createRef<any>();
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);
  const [startSearch, { loading, data }] = useLazyQuery(SEARCH_RESTAURANT, {
    variables: {
      search
    }
  });

  const [filters, setFilters] = useState(filtersData);

  const renderSearchItem = ({ item }: any) => {
    const { name, shortDescription, numRatings, avgPricePerPerson, pictures } = item;
    return (
      <Card
        style={{ margin: 2, backgroundColor: Theme.background }}
        onPress={() => {
          props.navigation.navigate('Menu', {
            menu_id: 101,
            restaurant_name: name
          });
        }}
      >
        <Card.Content style={{ flexDirection: 'row' }}>
          <View>
            <ImageBackground
              style={{ width: 100, height: 100 }}
              source={{ uri: pictures[0].url || 'https://b.zmtcdn.com/images/developers/apihome_bg.jpg' }}
            />
            <View style={{ width: 100, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', padding: 10 }}>
              <Icon
                color={Theme.text}
                type={'material-community'}
                iconStyle={{ fontSize: 10 }}
                style={{ paddingHorizontal: 10 }}
                name="star"
              />
              <Subheading style={{ fontSize: 8, paddingLeft: 10 }}>{numRatings || 0}</Subheading>
              <Divider />
              <Subheading style={{ fontSize: 8, paddingLeft: 10 }}>{numRatings || 'No'} Reviews</Subheading>
            </View>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <Title>{name}</Title>
            <Divider />
            <Subheading numberOfLines={3} ellipsizeMode={'tail'} style={{ flexWrap: 'wrap', fontSize: 10 }}>
              {shortDescription}
            </Subheading>
            <Divider />
            <View style={{ paddingTop: 10, flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                  <Icon
                    color={Theme.text}
                    type={'material-icons'}
                    iconStyle={{ fontSize: 12 }}
                    style={{ paddingHorizontal: 10 }}
                    name="local-offer"
                  />
                  <Subheading style={{ fontSize: 10, paddingLeft: 10 }}>30% Off</Subheading>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                  <Icon
                    color={Theme.text}
                    type={'material-community'}
                    iconStyle={{ fontSize: 12 }}
                    style={{ paddingHorizontal: 10 }}
                    name="timelapse"
                  />
                  <Subheading style={{ fontSize: 10, paddingLeft: 10 }}>40 Min</Subheading>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                  <Icon
                    color={Theme.text}
                    type={'font-awesome'}
                    iconStyle={{ fontSize: 12 }}
                    style={{ paddingHorizontal: 10 }}
                    name="rupee"
                  />
                  <Subheading style={{ fontSize: 10, paddingLeft: 10 }}>{avgPricePerPerson || 1000} for one</Subheading>
                </View>
                <Divider />
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  };
  return (
    <ScrollView
      headerProps={{
        leftComponent: {
          icon: 'arrow-back',
          onPress: () => {
            props.navigation.goBack();
          },
          color: Theme.text
        },
        rightComponent: (
          <Icon
            name="filter"
            type="antdesign"
            onPress={() => {
              setFilterMenuVisible(true);
            }}
            color={Theme.text}
          />
        ),
        title: 'Search'
      }}
      stickyComponent={
        <SearchBar
          autoFocus
          searchIcon={<SvgSearch size={20} fill={Theme.tertiary} />}
          placeholderTextColor={Theme.tertiary}
          containerStyle={{
            flex: 1,
            backgroundColor: Colors.greyWhite,
            borderTopWidth: 0,
            borderBottomWidth: 0
          }}
          inputContainerStyle={{ backgroundColor: Theme.background, padding: 0, height: 40 }}
          inputStyle={{ ...baseStyle.heading5, color: Theme.tertiary }}
          ref={textInput}
          placeholder="Search for restaurants, dishes, and more..."
          onChangeText={setSearch}
          onSubmitEditing={() => startSearch({ variables: { search } })}
          value={search}
        />
      }
    >
      {loading ? (
        <ListAnimated />
      ) : (
        <FlatList
          style={{ marginBottom: 200 }}
          keyExtractor={(item, index) => index.toString()}
          data={data ? data.topRestaurants : []}
          renderItem={renderSearchItem}
        />
      )}
      <FilterMenu
        handleCloseButton={setFilterMenuVisible}
        visible={filterMenuVisible}
        useFilters={[filters, setFilters]}
      />
    </ScrollView>
  );
};

export default SearchScreen;
