import React from 'react';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HOME, STATISTICS, SETTINGS, QUESTIONLIST, MOCK_EXAM, MINI_TEST } from '../../constants/path';
import * as UiContext from '../../contexts/ui';
import { Home, Statistics, Settings, QuestionList, MockExam, MiniTest } from '../../components/pages';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOR } from '../../constants/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardstyle: {
    opacity: current.progress,
  },
});

function switchStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.INITIAL:
      return <Stack.Screen name={HOME} component={TabRoutes} />;
    case UiContext.Status.STUDY:
      return <Stack.Screen name={QUESTIONLIST} component={QuestionList} />;
    case UiContext.Status.MOCK_EXAM:
      return <Stack.Screen name={MOCK_EXAM} component={MockExam} />;
    case UiContext.Status.MINI_TEST:
      return <Stack.Screen name={MINI_TEST} component={MiniTest} />;
    default:
      return <Stack.Screen name={HOME} component={TabRoutes} />;
  }
}

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      tabBar={() => null}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
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
        inactiveTintColor: COLOR.WHITE,
        inactiveBackgroundColor: COLOR.MAIN,
        activeBackgroundColor: COLOR.MAIN,
      }}
    >
      <Tab.Screen name={HOME} component={Home} options={{ title: 'ホーム' }} />
      <Tab.Screen name={STATISTICS} component={Statistics} options={{ title: '統計' }} />
      <Tab.Screen name={SETTINGS} component={Settings} options={{ title: '設定' }} />
    </Tab.Navigator>
  );
}

export default function MainRoutes() {
  const uiContext = React.useContext(UiContext.Context);
  return (
    // <SafeAreaProvider>
    //   <NavigationContainer>
    <Stack.Navigator initialRouteName={HOME} headerMode="none" screenOptions={{ cardStyleInterpolator: forFade }}>
      {switchStatus(uiContext.applicationState)}
    </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>
  );
}
