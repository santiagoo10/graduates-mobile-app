import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { screen } from "../../../utils";
import { styles } from "./SaleListScreen.styles";

export function SaleListScreen(props) {
  const { navigation } = props;

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const goToAdd = () => {
    navigation.navigate(screen.sale.tab, { screen: screen.sale.saleAdd });
  };

  return (
    <View style={styles.content}>
      <Text>Detalle de Servicios</Text>

      {/* {currentUser && ( */}
      <Icon
        reverse
        type="material-community"
        name="plus"
        color="#319bb4"
        containerStyle={styles.btnContainer}
        onPress={goToAdd}
      />
      {/* )} */}
    </View>
  );
}
