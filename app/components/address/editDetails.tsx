import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import { Theme, Colors, baseStyle, activeOpacity } from '../../theme';
import { TextInput } from 'react-native-paper';
import { dispatcher } from '../../context';
import { IAddress } from '../../context/Rootcontext/reducers';
import { addAddress, updateAddress } from '../../context/Rootcontext/actions';

export interface ImenuItem {
  title: string;
  icon: any;
  isSelected: boolean;
  handleOnPress?: () => void;
}

const TouchableListItem = (item: ImenuItem) => (
  <TouchableOpacity activeOpacity={activeOpacity} onPress={item.handleOnPress} style={styles.touchableitem}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        {item.icon && <Icon type={'material-community'} name={item.icon} size={24} />}
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {item.isSelected && <Icon color={Colors.green} type={'material-community'} name={'select-inverse'} size={24} />}
    </View>
  </TouchableOpacity>
);

export const EditDetails: React.FC<any> = (props: {
  handleCloseButton: () => void;
  editData: IAddress;
  save: boolean;
  selected: number;
}) => {
  const [address, setAddress] = useState(
    props.editData.addressData
      ? props.editData.addressData
      : [
          ['Address', props.editData.address || ''],
          ['Appartment, Flat, Floor Number', ''],
          ['Landmark', ''],
          ['Building Name', ''],
          ['Area / District', ''],
          ['Add a Label (ex. Work)', ''],
          ['Add delivery note', '']
        ]
  );
  const [deliveryOption, setDeliveryOption] = useState<number>(props.editData.deliveryOption || 1);

  const deliveryOptions = [['Meet at vehicle', 'car'], ['Deliver at door', 'door']];
  return (
    <React.Fragment>
      <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            ...baseStyle.heading2,
            color: Theme.darkText,
            marginBottom: 8
          }}
        >
          Edit details
        </Text>
        <Icon name="close" size={24} onPress={props.handleCloseButton} />
      </View>
      <ScrollView
        style={{
          marginBottom: 20
        }}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          key={1}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 6,
            marginBottom: 12
          }}
          keyExtractor={item => item[0]}
          contentContainerStyle={styles.containerFlatlist}
          data={address}
          numColumns={1}
          renderItem={({ item, index }) => (
            <TextInput
              key={index}
              theme={{
                colors: {
                  primary: Theme.darkText,
                  surface: Theme.background
                }
              }}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'words'}
              autoCorrect
              label={item[0]}
              defaultValue={item[1]}
              onChangeText={text => {
                address[index][1] = text;
                setAddress([...address]);
              }}
              style={{
                fontSize: 16,
                backgroundColor: Theme.background,
                justifyContent: 'center',
                borderRadius: 0,
                paddingTop: 4,
                marginBotom: 0
              }}
              textContentType={'fullStreetAddress'}
              returnKeyType={'next'}
              placeholderTextColor={Theme.darkText}
              selectionColor={Theme.darkText}
              maxLength={100}
            />
          )}
        />
        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.subtitle}>
          Delivery options
        </Text>
        <FlatList
          key={2}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 6 }}
          contentContainerStyle={styles.containerFlatlist}
          data={deliveryOptions}
          keyExtractor={item => item[0].toString()}
          numColumns={1}
          renderItem={({ item, index }) => (
            <TouchableListItem
              title={item[0]}
              icon={item[1]}
              isSelected={index === deliveryOption}
              handleOnPress={() => {
                setDeliveryOption(index);
              }}
            />
          )}
        />
      </ScrollView>
      {props.save ? (
        <Button
          title={'Save'}
          onPress={() => {
            dispatcher.dispatch(
              addAddress({
                title: address[5][1],
                address: address[0][1],
                addressData: address,
                coords: {
                  ...props.editData.coords
                },
                deliveryOption
              })
            );
            props.handleCloseButton();
          }}
        />
      ) : (
        <Button
          title={'Update'}
          onPress={() => {
            dispatcher.dispatch(
              updateAddress([
                props.selected,
                {
                  title: address[5][1],
                  address: address[0][1],
                  addressData: address,
                  coords: {
                    ...props.editData.coords
                  },
                  deliveryOption
                }
              ])
            );
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
    backgroundColor: Theme.surface,
    borderRadius: 6,
    padding: 6,
    flex: 1,
    minHeight: 36,
    marginBottom: 12
  },
  subtitle: {
    ...baseStyle.heading5,
    color: Colors.grey,
    padding: 20,
    paddingLeft: 0,
    paddingTop: 12
  },
  title: {
    ...baseStyle.subheading3,
    paddingTop: 3,
    color: Theme.darkText,
    paddingLeft: 20
  }
});
