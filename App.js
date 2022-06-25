import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainIntro from "./src/Screens/Intro/MainIntro/MainIntro";
import Home from "./src/Screens/Home/Home";
import CityModal from "./src/components/CityModal/CityModal";
import FilterModal from "./src/components/FilterModal/FilterModal";
import Universities from "./src/Screens/Universities/Universities";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainIntro" component={MainIntro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FilterModal" component={FilterModal} />
        <Stack.Screen name="Universities" component={Universities} />
        <Stack.Screen name="CityModal" component={CityModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
