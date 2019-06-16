import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme, Layout, globalStyle } from '../../theme';

interface Props {
  navigation: any;
  info: any;
}

interface State {
  favorited: boolean;
  paused: boolean;
}

class AboveTabBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      favorited: false,
      paused: true
    };

    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  toggleFavorite() {
    this.setState(prev => ({
      favorited: !prev.favorited
    }));
  }

  togglePlay() {
    this.setState(prev => ({
      paused: !prev.paused
    }));
  }

  render() {
    const { navigation, info } = this.props;
    const { favorited, paused } = this.state;

    const favoriteColor = favorited ? Theme.brandPrimary : Theme.white;
    const favoriteIcon = favorited ? 'heart' : 'heart-o';
    const iconPlay = paused ? 'play-circle' : 'pause-circle';

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('ModalMusicPlayer')}
        style={styles.container}
      >
        <TouchableOpacity
          activeOpacity={globalStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={this.toggleFavorite}
          style={styles.containerIcon}
        >
          <FontAwesome color={favoriteColor} name={favoriteIcon} size={20} />
        </TouchableOpacity>
        {info && (
          <View>
            <View style={styles.containerinfo}>
              <Text style={styles.title}>{`${info.title} · `}</Text>
              <Text style={styles.artist}>{info.artist}</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 4
              }}
            >
              <FontAwesome color={Theme.brandPrimary} name="bluetooth-b" size={14} />
              <Text style={styles.device}>Caleb&apos;s Beatsx</Text>
            </View>
          </View>
        )}
        <TouchableOpacity
          activeOpacity={globalStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={this.togglePlay}
          style={styles.containerIcon}
        >
          <FontAwesome color={Theme.white} name={iconPlay} size={28} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  artist: {
    color: Theme.greyLight,
    fontSize: 12
  },
  container: {
    alignSelf: 'center',
    backgroundColor: Theme.grey,
    borderBottomColor: Theme.blackBg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    width: '100%'
  },
  containerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  containerinfo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    width: Layout.window.width - 100
  },
  device: {
    color: Theme.brandPrimary,
    fontSize: 10,
    marginLeft: 4,
    textTransform: 'uppercase'
  },
  title: {
    color: Theme.white,
    fontSize: 12
  }
});

export default AboveTabBar;
