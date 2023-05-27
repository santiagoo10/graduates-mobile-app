import React from "react";
import { ScrollView, Image, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./UserGuestScreen.styles";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView style={styles.viewBody}>
      <Image
        source={require("../../../../assets/logo-unl-4.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu cuenta de Graduados!</Text>
      <Text style={styles.description}>
        Beneficios exclusivos para graduados de la Universidad Nacional Del
        Litoral
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.containerStyle}
          title="Ver tu perfil"
          onPress={goToLogin}
        />
      </View>
    </ScrollView>
  );
}
