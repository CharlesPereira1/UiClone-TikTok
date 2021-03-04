import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EntypoIcons from "react-native-vector-icons/Entypo";
import FeatherIcons from "react-native-vector-icons/Feather";
import AntIcons from "react-native-vector-icons/AntDesign";

import Home from "../pages/Home";
import Button from "../components/Button";

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
    <Tabs.Screen
      name="Home"
      component={Home}
      options={{
        title: "",
        tabBarIcon: ({ size, color }) => (
          <EntypoIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Discover"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => <Button />,
      }}
    />
    <Tabs.Screen
      name="New"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FeatherIcons name="chat" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Inbox"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <EntypoIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntIcons name="user" size={size} color={color} />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default Routes;
