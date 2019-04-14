import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TestScreen from "../screens/TestScreen";

export const HomeStack = createStackNavigator({
  Home: TestScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

export const ExploreStack = createStackNavigator({
  Explore: TestScreen,
  Search: TestScreen
});

ExploreStack.navigationOptions = {
  tabBarLabel: "Explore"
};

export const PostsStack = createStackNavigator({
  Posts: TestScreen
});

PostsStack.navigationOptions = {
  tabBarLabel: "Post"
};

export const ChatStack = createStackNavigator({
  Inbox: TestScreen
});

ChatStack.navigationOptions = {
  tabBarLabel: "Chat"
};

export const SettingsStack = createStackNavigator({
  Settings: TestScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Account"
};

export default createBottomTabNavigator({
  ExploreStack,
  HomeStack,
  PostsStack
});
