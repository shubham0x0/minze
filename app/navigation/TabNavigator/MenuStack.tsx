import { createStackNavigator } from 'react-navigation-stack';import MenuScreen from '../../screens/Main/MenuScreen';

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
MenuStack.navigationOptions = {
  header: null
};

export default MenuStack;
