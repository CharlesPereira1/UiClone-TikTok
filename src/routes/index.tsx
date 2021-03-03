import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";

const Tabs = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Tabs.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: "#000",
        borderTopColor: "rgba(255,255,255,0.3)",
      },
      activeTintColor: "#fff",
    }}
  >
    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Discover" component={Home} />
    <Tabs.Screen name="New" component={Home} />
    <Tabs.Screen name="Inbox" component={Home} />
    <Tabs.Screen name="Profile" component={Home} />
  </Tabs.Navigator>
);

export default Routes;
