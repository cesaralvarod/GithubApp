import { Formik, useField } from "formik";
import { Button, StyleSheet, View } from "react-native";
import FormikInputValue from "../components/FormikInputValue";
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: { margin: 12 },
});

const Login = () => {
  return (
    <View style={styles.form}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => {
          return (
            <View>
              <FormikInputValue name="email" placeholder="Email" />
              <FormikInputValue
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Button onPress={handleSubmit} title="Log in" />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Login;
