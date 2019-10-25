import { createStackNavigator } from 'react-navigation';
import MenuScreen from '../../screens/Main/MenuScreen';

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
