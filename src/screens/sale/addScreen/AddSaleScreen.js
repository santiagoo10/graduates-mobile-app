import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./AddSaleScreen.styles";
import { InfoForm } from "../../../components/sale/addSale";
import { initialVales, validationSchema } from "./AddSaleScreen.data";
import { useFormik } from "formik";
//import { v4 as uuid } from "uuid";

export function SaleAddScreen() {
  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        // const newData = formValue;
        // newData.id = uuid();
        // newData.createdAt = new Date();

        // await setDoc(doc(db, "restaurants", newData.id), newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <ImageRestaurant formik={formik} /> */}

      <InfoForm formik={formik} />

      {/* <UploadImagesForm formik={formik} /> */}

      <Button
        title="Crear restaurante"
        buttonStyle={styles.addSale}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
