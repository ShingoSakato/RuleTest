import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { COLOR } from '../../constants/theme';
import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';

export default class ResultBarChart extends React.Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
  });

  render() {
    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
      datasets: [
        {
          data: [20, 45, 30, 80, 100, 60, 90, 50],
        },
      ],
    };

    const width: number = Dimensions.get('window').width;
    const height: number = 300;

    const chartConfig: ChartConfig = {
      backgroundColor: '#fff',
      backgroundGradientFrom: '#fff',
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: '#fff',
      backgroundGradientToOpacity: 1,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      barPercentage: 0.8,
      useShadowColorFromDataset: false,
      decimalPlaces: 0,
      count: 1,
      data: { data },
    };

    return (
      <View style={this.styles.container}>
        <BarChart
          data={data}
          width={width}
          height={height}
          xAxisLabel={'章'}
          yAxisSuffix={'%'}
          showValuesOnTopOfBars={true}
          chartConfig={chartConfig}
          fromZero={true}
        />
      </View>
    );
  }
}
