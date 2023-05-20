import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export function SaleStack {
    return (
        <SaleStack.Navigator>
        <SaleStack.Screen
          name="sale-list"
          component={SaleListScreen}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <SaleStack.Screen
          name="sale-add"
          component={SaleAddScreen}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <SaleStack.Screen
          name="sale-detail"
          component={SaleDetailScreen}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
      </SaleStack.Navigator>
    )
  }