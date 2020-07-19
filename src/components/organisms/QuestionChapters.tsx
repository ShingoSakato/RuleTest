import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { QuestionChapter } from '../molecules';
import { COLOR } from '../../constants/theme';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: COLOR.MAIN_LIGHT,
  },
  container: {
    marginTop: 40,
    height: 100,
  },
});

export default function QuestionChapters() {
  console.log('a');
  const data = [
    { onPress: () => console.log('x'), id: 1, title: 'a', detail: 'b', detail2: undefined },
    { onPress: () => console.log('y'), id: 2, title: 'c', detail: 'd', detail2: undefined },
  ];

  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.id.toString()}
      data={data}
      renderItem={({ item }) => (
        <QuestionChapter
          onPress={item.onPress}
          id={item.id}
          title={item.title}
          detail={item.detail}
          detail2={item.detail2}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}
