import { View } from "react-native";
import { Image } from "react-native-elements";
import React from "react";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "../../../components/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Image
        source={require("../../../../assets/logo-unl-3.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
