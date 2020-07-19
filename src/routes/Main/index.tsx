import React from 'react';
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HOME, STATISTICS, SETTINGS} from '../../constants/path';
import * as UiContext from '../../contexts/ui';
import {Home, Statistics, Settings} from '../../components/pages';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLOR} from '../../constants/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const forFade = ({current}: StackCardInterpolationProps) => ({
  cardstyle: {
    opacity: current.progress,
  },
});

function switchStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.FIRST_OPEN:
      return <Stack.Screen name={HOME} component={TabRoutes} />;
    default:
      return <Stack.Screen name={HOME} component={TabRoutes} />;
  }
}

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={({route}) => ({
        tabBarIcon: ({size, color}) => {
          let iconName: string = 'home';

          if (route.name === HOME) {
            iconName = 'home';
          } else if (route.name === STATISTICS) {
            iconName = 'bar-chart';
          } else if (route.name === SETTINGS) {
            iconName = 'gear';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLOR.PRIMARY,
        inactiveTintColor: COLOR.DARK,
      }}>
      <Tab.Screen name={HOME} component={Home} options={{title: 'ホーム'}} />
      <Tab.Screen
        name={STATISTICS}
        component={Statistics}
        options={{title: '統計'}}
      />
      <Tab.Screen
        name={SETTINGS}
        component={Settings}
        options={{title: '設定'}}
      />
    </Tab.Navigator>
  );
}

export default function MainRoutes() {
  const uiContext = React.useContext(UiContext.Context);
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      headerMode="none"
      screenOptions={{cardStyleInterpolator: forFade}}>
      {switchStatus(uiContext.applicationState)}
    </Stack.Navigator>
  );
}
