import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { SaleStack } from "./SaleStack";
import { MapStack } from "./MapStack";
import { AccountStack } from "./AccountStack";

import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.sale.tab}
        component={SaleStack}
        options={{ title: "Beneficios" }}
      />
      <Tab.Screen
        name={screen.map.tab}
        component={MapStack}
        options={{ title: "Mapa" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screen.sale.tab) {
    iconName = "home";
  }

  if (route.name === screen.map.tab) {
    iconName = "map";
  }

  if (route.name === screen.account.tab) {
    iconName = "account";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
