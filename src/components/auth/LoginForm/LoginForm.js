import React, { useState } from "react";
import { View } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import { styles } from "./LoginForm.styles";

export function LoginForm() {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hiddenPassword}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={hiddenPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={() => setHiddenPassword(!hiddenPassword)}
          />
        }
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
      />
    </View>
  );
}
