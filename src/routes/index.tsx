import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoutes from './Main';

export default function Routes() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}
