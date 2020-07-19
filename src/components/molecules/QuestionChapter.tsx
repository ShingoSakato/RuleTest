import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLOR } from '../../constants/theme';

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: COLOR.MAIN,
    height: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: COLOR.WHITE,
  },
  detail: {
    fontSize: 20,
    color: COLOR.WHITE,
    paddingTop: 10,
  },
});

interface Props {
  onPress: () => void;
  id: number;
  title: string;
  detail: string;
  detail2?: string | undefined;
}

export default function QuestionCapter(props: Props) {
  const { onPress, title, detail, detail2 } = props;
  console.log(title);
  console.log(detail);

  return (
    <TouchableHighlight style={styles.contentContainer} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.detail}>{detail}</Text>
          {!!detail2 && <Text style={styles.detail}>{detail2}</Text>}
        </View>
        <Icon name="angle-right" size={32} color={COLOR.WHITE} />
      </View>
    </TouchableHighlight>
  );
}
