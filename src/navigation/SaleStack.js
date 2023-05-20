import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SaleListScreen } from "../screens/sale/SaleListScreen";
import { SaleAddScreen } from "../screens/sale/SaleAddScreen";
import { SaleDetailScreen } from "../screens/sale/SaleDetailScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function SaleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.sale.saleList}
        component={SaleListScreen}
        options={{ title: "Beneficios" }}
      />
      <Stack.Screen
        name={screen.sale.saleAdd}
        component={SaleAddScreen}
        options={{ title: "Agregar" }}
      />
      <Stack.Screen
        name={screen.sale.saleDetail}
        component={SaleDetailScreen}
        options={{ title: "Titulo detalle a cambiar..." }}
      />
    </Stack.Navigator>
  );
}
