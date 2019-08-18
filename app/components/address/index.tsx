import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import Dialog, { DialogContent, ScaleAnimation, SlideAnimation } from 'react-native-popup-dialog';
import { Theme, Layout } from '../../theme';
import { SelectAddress } from './selectAddress';
import { EditDetails } from './editDetails';
import { reverseGeocoder, getLocationUpdate } from '../../utils/getLocation';

const AddressMenu = (props: { currentDelivery: any; visible: any; handleCloseButton?: any; savedAddresses: any[] }) => {
  const { visible, savedAddresses, currentDelivery } = props;
  const [editData, setEditData] = useState({});
  const [selected, setSelected] = useState(currentDelivery);
  const [search, setSearch] = useState('');

  const handleCloseButton = () => {
    props.handleCloseButton();
    setEditData({});
  };

  return (
    <Dialog
      containerStyle={{ backgroundColor: 'transparent' }}
      animationDuration={Platform.OS === 'ios' ? 500 : 800}
      onTouchOutside={handleCloseButton}
      dialogAnimation={Platform.OS === 'ios' ? new ScaleAnimation() : new SlideAnimation({ slideFrom: 'bottom' })}
      visible={visible}
      {...props}
    >
      <DialogContent
        style={{
          width: Layout.window.width / 1.1,
          height: Layout.window.height / 1.1,
          backgroundColor: Theme.background,
          borderRadius: 0
        }}
      >
        {Object.keys(editData).length !== 0 || savedAddresses.length === 0 ? (
          <EditDetails
            save={search !== '' || savedAddresses.length === 0}
            selected={selected}
            editData={editData}
            handleCloseButton={() => {
              if (savedAddresses.length === 0) {
                props.handleCloseButton();
              }
              if (search !== '') {
                setSelected(0);
                setSearch('');
              } else {
                setSelected(selected);
              }
              setEditData({});
            }}
          />
        ) : (
          <SelectAddress
            search={search}
            setSearch={setSearch}
            selected={selected}
            setSelected={setSelected}
            savedAddresses={savedAddresses}
            setEditData={setEditData}
            handleCloseButton={() => {
              props.handleCloseButton();
              setEditData({});
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddressMenu;
