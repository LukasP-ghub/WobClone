import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';

import TextField from './fields/TextField';
import Checkbox from './fields/Checkbox';
import SelectField from './fields/SelectField';

import styles from './RegistrationForm.module.scss'

const { centerVH, submitBtn, wrapper } = styles;

interface Values {
  password: string;
  passwordRepeat: string;
  email: string;
}

const RegistrationForm = () => {

  const validation: any = {
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Required'),
    passwordRepeat: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    acceptedTerms: Yup.boolean()
      .required('Required')
      .oneOf([true], 'You must accept the terms and conditions.'),
    country: Yup.string()
      .oneOf(
        ['poland', 'noPoland'],
        'Select Country'
      )
      .required('Required'),
  }


  return <div className={wrapper}>

    <h1>My Form</h1>

    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordRepeat: '',
      }}
      validationSchema={Yup.object(validation)}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<Values>) => (
        <Form>
          <TextField name="email" type="email" label="Email" />
          <TextField name="password" type="password" label="Password" />
          <TextField name="passwordRepeat" type="password" label="Repeat Password" />
          <SelectField label="Country" name="country">
            <option value="">Select a country</option>
            <option value="poland">Poland</option>
            <option value="noPoland">No Poland</option>
          </SelectField>
          <Checkbox prop={{ name: "acceptedTerms" }}>
            I accept the terms and conditions
          </Checkbox>
          <button type="submit" className={submitBtn}><span className={centerVH}>Submit</span></button>
        </Form>
      )}
    </Formik>

  </div>
}

export default RegistrationForm;