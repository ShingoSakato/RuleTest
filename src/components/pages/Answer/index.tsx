import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../atoms/';
import { COLOR } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.MAIN,
  },
  button: {
    width: 300,
    color: COLOR.LIGHT,
    marginBottom: 40,
  },
});

export default function Answer() {
  return (
    <View style={styles.container}>
      <Button onPress={() => console.log('Answer')} style={styles.button} label="Answer" />
    </View>
  );
}
