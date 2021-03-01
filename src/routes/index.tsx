import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../pages/Home";

const Tabs = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  </NavigationContainer>
);

export default Routes;
