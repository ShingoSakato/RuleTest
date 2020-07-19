import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../atoms/';
import { COLOR } from '../../../constants/theme';
import { HeaderText } from '../../atoms';

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
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: COLOR.MAIN,
    height: 50,
  },
});

export default function Home() {
  return (
    <>
      <View style={styles.headerTextContainer}>
        <HeaderText text="ルールテスト" />
      </View>
      <View style={styles.container}>
        <Button onPress={() => console.log('勉強 250問')} style={styles.button} label="勉強 250問" />
        <Button onPress={() => console.log('予想問題 25問')} style={styles.button} label="予想問題 25問" />
        <Button onPress={() => console.log('小テスト 10問')} style={styles.button} label="小テスト 10問" />
      </View>
    </>
  );
}
