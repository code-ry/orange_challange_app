import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from "./navigation/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
