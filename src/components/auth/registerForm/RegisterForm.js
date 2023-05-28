import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues } from "./RegisterForm.data";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenRepeatPassword, setHiddenRepeatPassword] = useState(true);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [repeatPassword, setRepeatPassword] = useState("");
  //   const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Email"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
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
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Input
        placeholder="Repetir Contraseña"
        password={true}
        secureTextEntry={hiddenRepeatPassword}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={hiddenRepeatPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={() => setHiddenRepeatPassword(!hiddenRepeatPassword)}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
      />
      <Button
        title="Unirse"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={formik.handleSubmit}
      />
    </View>
  );
}
