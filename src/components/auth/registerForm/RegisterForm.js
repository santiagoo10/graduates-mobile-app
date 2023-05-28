import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenRepeatPassword, setHiddenRepeatPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hiddenPassword}
        containerStyle={styles.inputForm}
        onChange={(p) => setPassword(p.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hiddenPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHiddenPassword(!hiddenPassword)}
          />
        }
      />
      <Input
        placeholder="Repetir Contraseña"
        password={true}
        secureTextEntry={hiddenRepeatPassword}
        containerStyle={styles.inputForm}
        onChange={(rp) => setRepeatPassword(rp.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hiddenRepeatPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHiddenRepeatPassword(!hiddenRepeatPassword)}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.buttonContainerRegister}
        buttonStyle={styles.ButtonRegister}
        // onPress={register}
      />
    </View>
  );
}
