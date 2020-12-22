import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';

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

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) =>
        <View style={styles.container}>
          <FormikTextInput style={styles.textInput} name='username' placeholder='Username' />
          <FormikTextInput style={styles.textInput} secureTextEntry name='password' placeholder='Password' />
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <Text style={styles.button} fontWeight='bold' fontSize='textSecondary'>Sign in</Text>
          </TouchableWithoutFeedback>
        </View>
      }
    </Formik>
  );
};

export default SignIn;