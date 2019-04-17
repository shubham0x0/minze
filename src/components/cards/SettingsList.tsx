import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '../../theme';
import { ListItem } from 'react-native-elements';

export class SettingsList extends React.Component<{ item: any }, {}> {
  state = {
    isExpanded: false
  };

  render() {
    const { item } = this.props;
    return (
      <View>
        <ListItem
          title={item.title}
          subtitle={item.subtitle}
          leftIcon={{ name: item.icon, type: item.iconType }}
          rightIcon={{ name: 'chevron-with-circle-down', type: 'entypo' }}
          onPress={() => {
            if (!item.children) {
              item.onPress();
            } else {
              const { isExpanded } = this.state;
              this.setState({ isExpanded: !isExpanded });
            }
          }}
        />
        {this.state.isExpanded && item.children && (
          <TouchableOpacity
            onPress={item.onPress}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              padding: 20
            }}
          >
            {item.children}
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  subtitle: {
    color: Theme.text
  }
});
