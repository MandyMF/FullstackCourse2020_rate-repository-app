import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const styles = StyleSheet.create({
  button: {
    color: theme.colors.tabLabel,
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  container: {
    padding: 10,
    backgroundColor: theme.colors.listItemBackgroundColor,
  },
  textInput: {
    color: theme.colors.textSecondary,
    borderColor: theme.colors.mainBackgroundColor,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  }

});

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) =>
        <View style={styles.container}>
          <FormikTextInput testID='usernameField' style={styles.textInput} name='username' placeholder='Username' />
          <FormikTextInput testID='passwordField' style={styles.textInput} secureTextEntry name='password' placeholder='Password' />
          <TouchableWithoutFeedback testID='submitButton' onPress={handleSubmit}>
            <Text style={styles.button} fontWeight='bold' fontSize='textSecondary'>Sign in</Text>
          </TouchableWithoutFeedback>
        </View>
      }
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push("/");

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignIn;