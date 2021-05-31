import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';

import TextField from '../../commonComponents/formFields/TextField';
import Checkbox from '../../commonComponents/formFields/Checkbox';
import SelectField from '../../commonComponents/formFields/SelectField';

import styles from './SignUp.module.scss'

const { centerVH, submitBtn, wrapper } = styles;

interface Values {
  password: string;
  passwordRepeat: string;
  email: string;
}

const SignUp = () => {
  const { signUp } = useAuth();
  const history = useHistory();

  const validation: any = {
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/^[a-zA-Z0-9]*$/, 'Password can contain only letters and numbers')
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
    <h1>Registration</h1>

    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordRepeat: '',
      }}
      validationSchema={Yup.object(validation)}
      onSubmit={(values, actions) => {
        signUp(values.email, values.password)
          .then((res) => {
            actions.setSubmitting(false);
            history.push('/');
          })
          .catch((error) => {
            alert(`${error.code} ${error.message}`);
          });
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
          <button type="submit" className={submitBtn} disabled={props.isSubmitting}><span className={centerVH}>Submit</span></button>
        </Form>
      )}
    </Formik>

  </div>
}

export default SignUp;