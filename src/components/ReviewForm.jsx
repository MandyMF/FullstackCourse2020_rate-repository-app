import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';


const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().typeError('Rating must be a Number').min(0).max(100).required('Rating is required'),
  text: yup.string(),
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

export const ReviewInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) =>
        <View style={styles.container} >
          <FormikTextInput style={styles.textInput} name='ownerName' placeholder='Repository owner name' />
          <FormikTextInput style={styles.textInput} name='repositoryName' placeholder='Repository name' />
          <FormikTextInput style={styles.textInput} name='rating' placeholder='Rating between 0 and 100' />
          <FormikTextInput style={styles.textInput} name='text' placeholder='Review' multiline />
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button} fontWeight='bold' fontSize='textSecondary'>Create a review</Text>
          </TouchableOpacity>
        </View>
      }
    </Formik>
  );
};

const ReviewForm = () => {
  const [review] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const result = await review({ ownerName, repositoryName, rating: Number(rating), text });
      history.push(`/${result.data.createReview.repositoryId}`);

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView>
      <ReviewInContainer onSubmit={onSubmit} />
    </ScrollView>
  );
};

export default ReviewForm;