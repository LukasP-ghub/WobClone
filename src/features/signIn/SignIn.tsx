import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';

import TextField from './fields/TextField';

import styles from './SignIn.module.scss'

const { centerVH, submitBtn, wrapper } = styles;

interface Values {
  password: string;
  email: string;
}

const SignIn = () => {

  const validation: any = {
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/^[a-zA-Z0-9]*$/, 'Password can contain only letters and numbers')
      .required('Required'),
  }


  return <div className={wrapper}>
    <h1>Sign In</h1>

    <Formik
      initialValues={{
        email: '',
        password: '',
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
          <button type="submit" className={submitBtn}><span className={centerVH}>Sign In</span></button>
        </Form>
      )}
    </Formik>

  </div>
}

export default SignIn;