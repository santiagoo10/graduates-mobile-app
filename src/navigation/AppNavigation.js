import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LoginScreen from "../screens/account/LoginScreen";
import SaleLlistScreen from "../screens/sale/SaleLlistScreen";
import SaleMapScreen from "../screens/sale/SaleMapScreen";

const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return (
    <Tab.Navigator>
        <Tab.Screen name="Login" component={ LoginScreen} />
        <Tab.Screen name="Lista" component={ SaleLlistScreen} />
        <Tab.Screen name="Mapa" component={ SaleMapScreen} />
    </Tab.Navigator>
    );
}
