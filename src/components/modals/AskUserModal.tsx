import React from 'react';
import { Platform, Text, Dimensions } from 'react-native';
import Dialog, { DialogContent, ScaleAnimation, SlideAnimation } from 'react-native-popup-dialog';
import TouchableOpacityButton from '../buttons/TouchableOpacityButton';

import { FontWeights, Theme } from '../../theme';

const AskUserModal = (props: {
  onSuccess: any;
  onFailure: any;
  headerContent: any;
  subContent: any;
  successButtonText: any;
  failureButtonText: any;
  successButtonTextColor: any;
  failureButtonTextColor: any;
  isVisible: any;
  toggleDialog: any;
}) => {
  let {
    onSuccess,
    onFailure,
    headerContent,
    subContent,
    successButtonText,
    failureButtonText,
    successButtonTextColor,
    failureButtonTextColor,
    isVisible,
    toggleDialog
  } = props;

  return (
    <Dialog
      containerStyle={{ backgroundColor: 'transparent' }}
      animationDuration={Platform.OS === 'ios' ? 500 : 800}
      onTouchOutside={toggleDialog}
      dialogAnimation={Platform.OS === 'ios' ? new ScaleAnimation() : new SlideAnimation({ slideFrom: 'bottom' })}
      onRequestClose={toggleDialog}
      presentationStyle={'overFullScreen'}
      transparent
      visible={isVisible}
      animationType={'slide'}
    >
      <DialogContent
        style={{
          width: 192,
          padding: 20,
          backgroundColor: '#EFEFEF',
          borderRadius: 10
        }}
      >
        <Text
          style={{
            color: '#000',
            textAlign: 'left',
            fontSize: 32,
            marginBottom: 8,
            padding: 4
          }}
        >
          {headerContent}
        </Text>
        <Text
          style={{
            ...FontWeights.light,
            color: '#000',
            textAlign: 'left',
            fontSize: 28,
            padding: 4
          }}
        >
          {subContent}
        </Text>

        <TouchableOpacityButton
          onPress={() => onSuccess()}
          style={{
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 15,
            backgroundColor: Theme.grey
          }}
        >
          <Text style={{ color: successButtonTextColor, fontSize: 22 }}>{successButtonText}</Text>
        </TouchableOpacityButton>

        <TouchableOpacityButton
          onPress={() => onFailure()}
          style={{
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 15,
            backgroundColor: Theme.primary
          }}
        >
          <Text style={{ ...FontWeights.light, color: failureButtonTextColor, fontSize: 22 }}>{failureButtonText}</Text>
        </TouchableOpacityButton>
      </DialogContent>
    </Dialog>
  );
};

export default AskUserModal;
