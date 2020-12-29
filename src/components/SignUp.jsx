import React from 'react';
import { ScrollView, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import useCreateUser from '../hooks/useCreateUser';
import { useHistory } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required('Username is required'),
  password: yup.string().min(5).max(50).required('Password is required'),
  passwordConfirmation: yup.string().required('Password confirmation is required').oneOf([yup.ref('password')], 'Password do not match')
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

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) =>
        <View style={styles.container}>
          <FormikTextInput testID='usernameField' style={styles.textInput} name='username' placeholder='Username' />
          <FormikTextInput testID='passwordField' style={styles.textInput} secureTextEntry name='password' placeholder='Password' />
          <FormikTextInput testID='passwordConfirmationField' style={styles.textInput} secureTextEntry name='passwordConfirmation' placeholder='Password confirmation' />
          <TouchableWithoutFeedback testID='submitButton' onPress={handleSubmit}>
            <Text style={styles.button} fontWeight='bold' fontSize='textSecondary'>Sign up</Text>
          </TouchableWithoutFeedback>
        </View>
      }
    </Formik>
  );
};

const SignUp = () => {
  const [signIn] = useSignIn();
  const [createUser] = useCreateUser();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await createUser({ username, password });
      await signIn({ username, password });
      history.push("/");

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView>
      <SignUpContainer onSubmit={onSubmit} />
    </ScrollView>
  );
};

export default SignUp;