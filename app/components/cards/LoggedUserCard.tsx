import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { connect } from 'react-redux';

const LoggedUser = (props: { user: any }) => {
  const { user } = props;
  if (!user) return <View />;
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleIconContainer}>
        <Text style={[styles.monoText, { alignSelf: 'center' }]} numberOfLines={1}>
          {user.displayName && user.displayName}
        </Text>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 50
          }}
          source={
            user.photoURL
              ? {
                  uri: user.photoURL
                }
              : require('assets/images/profile-1.png')
          }
        />
      </View>
      <View style={styles.titleSubContainer}>
        <Text style={styles.monoText}>{user.email && user.email}</Text>
        <Text style={styles.monoText}>{user.uid}</Text>
        <Text style={styles.monoText}>{user.providerId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    color: Theme.secondary,
    fontSize: 14,
    marginTop: 6
  },
  monoText: {
    color: Theme.infoText,
    fontFamily: 'space-mono',
    fontSize: 14
  },
  titleContainer: {
    borderColor: Theme.secondary,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 12,
    marginTop: 12,
    padding: 12
  },
  titleHeader: {
    alignSelf: 'center',
    color: Theme.primary,
    fontSize: 28
  },
  titleIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 2
  },
  titleSubContainer: {
    alignContent: 'center'
  },
  userText: {
    color: Theme.darkText,
    fontSize: 14,
    marginTop: 6
  }
});

const mapStateToProps = (state: { user: any[] }) => ({
  user: state.user
});

export default connect(mapStateToProps)(LoggedUser);
