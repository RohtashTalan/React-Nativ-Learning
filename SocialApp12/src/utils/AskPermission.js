import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import React from 'react';

const AskPermission = async () => {
  try {
    const grandted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);

    console.log(grandted);

    if (
      grandted['PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE'] ===
        'denied' ||
      grandted['PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE'] ===
        'denied'
    ) {
      ToastAndroid.show(
        'We cannot proceed without permission',
        ToastAndroid.LONG,
      );
      AskPermission();
    }
  } catch (error) {
    console.error(error);
  }
};

export default AskPermission;

const styles = StyleSheet.create({});
