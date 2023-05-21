import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import React from "react";
import { screen } from "../../utils";

export function SaleListScreen(props) {
  const { navigation } = props;

  const goToAdd = () => {
    navigation.navigate(screen.sale.tab, { screen: screen.sale.saleAdd });
  };

  return (
    <View>
      <Text>SaleListScreen</Text>
      <Button title="Agregar beneficio" onPress={goToAdd} />
    </View>
  );
}
