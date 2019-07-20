import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, globalStyle } from '../../theme';
import { NavigationType } from '../../types';

const AlbumsHorizontal = ({ data, heading, navigation, tagline, images }: Props) => (
  <View style={styles.container}>
    {heading && <Text style={styles.heading}>{heading}</Text>}
    {tagline && <Text style={styles.tagline}>{tagline}</Text>}

    <FlatList
      contentContainerStyle={styles.containerContent}
      data={data}
      horizontal
      keyExtractor={itemObj => itemObj.id.toString()}
      renderItem={itemObj => {
        const { item } = itemObj;

        return (
          <TouchableOpacity
            activeOpacity={globalStyle.activeOpacity}
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
            onPress={() => navigation.navigate('Album', { title: item.title })}
            style={styles.item}
          >
            <View style={styles.image}>{item.image && <Image source={images[item.image]} style={styles.image} />}</View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

interface Props {
  // required
  data: any[];
  navigation: NavigationType;
  // optional
  heading?: string;
  tagline?: string;
  images: any;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    width: '100%'
  },
  containerContent: {
    paddingLeft: 16
  },
  heading: {
    color: Colors.white,
    fontSize: 18,
    paddingBottom: 6,
    textAlign: 'center'
  },
  image: {
    backgroundColor: Colors.greyLight,
    height: 148,
    width: 148
  },
  item: {
    marginRight: 16,
    width: 148
  },
  tagline: {
    color: Colors.greyInactive,
    fontSize: 12,
    paddingBottom: 6,
    textAlign: 'center'
  },
  title: {
    color: Colors.white,
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center'
  }
});

export default AlbumsHorizontal;
