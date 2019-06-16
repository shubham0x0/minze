import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '../../theme';
import { ListItem } from 'react-native-elements';

interface Props {
  item: {
    title: any;
    onPress?: any;
    subtitle?: any;
    icon?: any;
    iconType?: any;
    children?: any;
  };
  containerStyle?: any;
  childrenStyle?: any;
  listItemProps?: any;
}

interface State {
  isExpanded: boolean;
}
export class SettingsList extends React.Component<Props, State> {
  state = {
    isExpanded: false
  };
  static defaultProps = {
    item: {
      title: ''
    },
    containerStyle: {},
    childrenStyle: {
      paddingLeft: 30,
      paddingRight: 30
    },
    listItemProps: {}
  };
  render() {
    const { item, containerStyle } = this.props;
    return (
      <View style={containerStyle}>
        {/*
        // @ts-ignore */}
        <ListItem
          {...this.props.listItemProps}
          chevron={!!item.children}
          underlayColor="transparent"
          containerStyle={{ backgroundColor: 'transparent', borderColor: Theme.black20 }}
          titleStyle={{ color: Theme.lightgrey }}
          subtitleStyle={{ color: Theme.lightgrey }}
          title={item.title}
          subtitle={item.subtitle}
          leftIcon={{ name: item.icon, type: item.iconType }}
          // rightIcon={{ name: 'chevron-with-circle-right', type: 'entypo' }}
          onPress={() => {
            if (!item.children) {
              item.onPress();
            } else {
              const { isExpanded } = this.state;
              this.setState({ isExpanded: !isExpanded });
            }
          }}
        />
        <View style={this.props.childrenStyle}>{this.state.isExpanded && item.children && item.children}</View>
      </View>
    );
  }
}
