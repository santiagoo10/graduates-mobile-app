import { View } from "react-native";
import { Image } from "react-native-elements";
import React from "react";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "../../../components/auth";

export function RegisterScreen() {
  return (
    <View>
      <Image
        source={require("../../../../assets/logo-unl-3.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <RegisterForm />
      </View>
    </View>
  );
}
