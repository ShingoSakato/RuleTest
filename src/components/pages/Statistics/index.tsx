import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BarChart } from '../../atoms';
import { COLOR } from '../../../constants/theme';
import { Button } from '../../atoms/';

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

export default function Statistics() {
  return (
    <View style={styles.container}>
      <BarChart />
      {/* <Button onPress={() => console.log('Statistics')} style={styles.button} label="統計" /> */}
    </View>
  );
}
