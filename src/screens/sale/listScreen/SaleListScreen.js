import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import React from "react";
import { screen } from "../../../utils";
import { styles } from "./SaleListScreen.styles";

export function SaleListScreen(props) {
  const { navigation } = props;

  const goToAdd = () => {
    navigation.navigate(screen.sale.tab, { screen: screen.sale.saleAdd });
  };

  return (
    <View style={styles.content}>
      <Text>Detalle de Servicios</Text>

      <Icon
        reverse
        type="material-community"
        name="plus"
        color="#319bb4"
        containerStyle={styles.btnContainer}
        onPress={goToAdd}
      />
    </View>
  );
}
