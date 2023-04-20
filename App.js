import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from "./navigation/BottomTab";

// Need to reconfigure navigation to include Stack navigation with Tab navigation Nested.

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
