import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenRepeatPassword, setHiddenRepeatPassword] = useState(true);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
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
        errorMessage={formik.errors.password}
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
        errorMessage={formik.errors.repeatPassword}
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
