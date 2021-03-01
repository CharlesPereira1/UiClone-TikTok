import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";

const Tabs = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={Home} />
  </Tabs.Navigator>
);

export default Routes;
