import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import React from 'react';

const askPermission = async () => {
  try {
    const grandted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);

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
      askPermission();
    }
  } catch (error) {
    console.error(error);
  }
};

export  {askPermission};

const styles = StyleSheet.create({});
