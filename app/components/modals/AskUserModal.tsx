import React from 'react';
import { Platform, Text } from 'react-native';
import Dialog, { DialogContent, ScaleAnimation, SlideAnimation } from 'react-native-popup-dialog';
import TouchableOpacityButton from '../touchable/TouchableOpacityButton';

import { FontWeights, Theme, Colors, Layout, baseStyle } from '../../theme';

const AskUserModal = (props: {
  onSuccess: any;
  onFailure?: any;
  headerContent?: any;
  subContent?: any;
  successButtonText?: any;
  failureButtonText?: any;
  successButtonTextColor?: any;
  failureButtonTextColor?: any;
  visible: any;
  toggleDialog?: any;
}) => {
  const {
    onSuccess,
    onFailure,
    headerContent,
    subContent,
    successButtonText,
    failureButtonText,
    successButtonTextColor,
    failureButtonTextColor,
    visible,
    toggleDialog
  } = props;

  return (
    <Dialog
      containerStyle={{ backgroundColor: 'transparent' }}
      animationDuration={Platform.OS === 'ios' ? 500 : 800}
      onTouchOutside={toggleDialog}
      dialogAnimation={Platform.OS === 'ios' ? new ScaleAnimation() : new SlideAnimation({ slideFrom: 'bottom' })}
      visible={visible}
      {...props}
    >
      <DialogContent
        style={{
          width: Layout.window.width / 1.2,
          padding: 20,
          backgroundColor: Theme.background,
          borderRadius: 10
        }}
      >
        <Text
          style={{
            ...baseStyle.heading1,
            color: Theme.darkText,
            textAlign: 'left',
            marginBottom: 8,
            padding: 4
          }}
        >
          {headerContent || 'Confirm'}
        </Text>
        <Text
          style={{
            ...baseStyle.heading4,
            color: Theme.darkText,
            textAlign: 'left'
          }}
        >
          {subContent || 'Do you confirm?'}
        </Text>

        <TouchableOpacityButton
          onPress={() => {
            onSuccess && onSuccess();
            toggleDialog();
          }}
          style={{
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 15,
            backgroundColor: Theme.brandPrimary
          }}
        >
          <Text
            style={{
              ...baseStyle.heading4,
              color: successButtonTextColor || Theme.lightText,
              fontSize: 22
            }}
          >
            {successButtonText || 'Yes'}
          </Text>
        </TouchableOpacityButton>

        <TouchableOpacityButton
          onPress={() => {
            onFailure && onFailure();
            toggleDialog();
          }}
          style={{
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 15,
            backgroundColor: Theme.surface
          }}
        >
          <Text
            style={{
              ...baseStyle.heading4,
              ...FontWeights.light,
              color: failureButtonTextColor || Theme.darkText,
              fontSize: 22
            }}
          >
            {failureButtonText || 'No'}
          </Text>
        </TouchableOpacityButton>
      </DialogContent>
    </Dialog>
  );
};

export default AskUserModal;
