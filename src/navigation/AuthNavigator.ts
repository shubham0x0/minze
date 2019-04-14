import { createStackNavigator } from "react-navigation";
import TestScreen from "../screens/TestScreen";

export const AuthStackNavigator = createStackNavigator({
  OnBoard: TestScreen,
  SignUp: TestScreen,
  Providers: TestScreen,
  PhoneAuth: TestScreen
});
