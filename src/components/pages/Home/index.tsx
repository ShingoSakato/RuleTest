import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../atoms/';
import { COLOR } from '../../../constants/theme';
import { HeaderText } from '../../atoms';
import * as UiContext from '../../../contexts/ui';

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
    backgroundColor: COLOR.MAIN,
    height: 50,
  },
});

export default function Home() {
  const { setApplicationState } = React.useContext(UiContext.Context);
  const onPressStudy = () => setApplicationState(UiContext.Status.STUDY);
  const onPressMockExam = () => setApplicationState(UiContext.Status.MOCK_EXAM);
  const onPressMiniTest = () => setApplicationState(UiContext.Status.MINI_TEST);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTextContainer}>
        <HeaderText text="ルールテスト" />
      </View>
      <View style={styles.container}>
        <Button onPress={onPressStudy} style={styles.button} label="勉強 250問" />
        <Button onPress={onPressMockExam} style={styles.button} label="予想問題 25問" />
        <Button onPress={onPressMiniTest} style={styles.button} label="小テスト 10問" />
      </View>
    </SafeAreaView>
  );
}
