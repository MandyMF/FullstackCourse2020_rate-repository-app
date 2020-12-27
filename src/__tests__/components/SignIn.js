import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import {SignInContainer} from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit}/>);

      const usernameField = getByTestId('usernameField');
      const passwordField = getByTestId('passwordField');
      const submitButton = getByTestId('submitButton');

      /*didn't use act here because when I used 'await act(async ()=> {...})', it throws a warning about the need to use await before act,
      strange stuff, because I was exactly doing that; in the current way works fine and no warning*/

      fireEvent.changeText(usernameField, 'kalle');
      fireEvent.changeText(passwordField, 'password');
      fireEvent.press(submitButton);

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });
    });
  });
});