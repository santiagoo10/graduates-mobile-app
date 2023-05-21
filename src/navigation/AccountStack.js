import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyAccountScreen } from "../screens/account/MyAccountScreen";
import { LoginScreen } from "../screens/account/LoginScreen";
import { RegisterScreen } from "../screens/account/RegisterScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={MyAccountScreen}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{ title: "Iniciar sesión" }}
      />
      <Stack.Screen
        name={screen.account.register}
        component={RegisterScreen}
        options={{ title: "Crea tu cuenta" }}
      />
    </Stack.Navigator>
  );
}
