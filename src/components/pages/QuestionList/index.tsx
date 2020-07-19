import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/theme';
import { QuestionChapter } from '../../molecules';
//import { QuestionChapters } from '../../organisms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.MAIN,
    paddingTop: 40,
    paddingBottom: 40,
  },
});

export default function QuestionList() {
  // const data = [
  //   {
  //     onPress: console.log('test'),
  //     id: 1,
  //     title: '',
  //     detail: '',
  //   },
  // ];

  return (
    <SafeAreaView style={styles.container}>
      <QuestionChapter
        onPress={() => console.log('sakato')}
        id={1}
        title={'第1,2章'}
        detail={'ゲーム'}
        detail2={'プレーイングコート、用具、器具'}
      />
      <QuestionChapter
        onPress={() => console.log('sakato')}
        id={2}
        title={'第3,4章'}
        detail={'チーム'}
        detail2={'プレーの規程'}
      />
      <QuestionChapter onPress={() => console.log('sakato')} id={3} title={'第5章'} detail={'バイオレーション'} />
      <QuestionChapter onPress={() => console.log('sakato')} id={4} title={'第6章'} detail={'ファウル'} />
      <QuestionChapter onPress={() => console.log('sakato')} id={5} title={'第7章'} detail={'総則'} />
      <QuestionChapter
        onPress={() => console.log('sakato')}
        id={6}
        title={'第8章'}
        detail={'審判、 テーブル オフィシャルズ、 コミッショナー ：任務と権限'}
      />
      <QuestionChapter onPress={() => console.log('sakato')} id={7} title={'-'} detail={'2019ルール'} />

      {/* <QuestionChapters /> */}
    </SafeAreaView>
  );
}
