import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components";
import { InfoUser } from "../../../components/account";
import { styles } from "./UserLoggedScreen.styles";

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };
  return (
    <View style={styles.View}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      {/* <AccountOptions onReload={onReload} /> */}

      <Button
        title="Cerrar sesión"
        buttonStyle={styles.button}
        titleStyle={styles.title}
        onPress={logout}
      />

      <LoadingModal show={loading} text={loadingText} />
    </View>
  );
}
