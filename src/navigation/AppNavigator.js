import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        List: ListScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'gold',
                elevation: 0,
                height: 60
            },
            headerTitleContainerStyle: {
                justifyContent: 'center',
                left: 0,
                right: 0
            },
            headerTitleStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 1
            }
        }
    }
)

export default createAppContainer(AppNavigator)