import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { initFirebase } from "./src/utils";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation></AppNavigation>
      </NavigationContainer>

      <Toast />
    </>
  );
}
