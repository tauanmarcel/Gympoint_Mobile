import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SingIn from './pages/SingIn';

export default createAppContainer(
  createSwitchNavigator({
    SingIn,
  }),
);
