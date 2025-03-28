import { Form, Formik, FormikProps } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Checkbox from '../../components/formFields/Checkbox';
import SelectField from '../../components/formFields/SelectField';
import TextField from '../../components/formFields/TextField';
import { useRegisterMutation } from '../../services/apiSlice';
import styles from './SignUp.module.scss';
const { centerVH, submitBtn, wrapper } = styles;



interface Values {
  password: string;
  passwordRepeat: string;
  email: string;
}

const SignUp = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const validation: any = {
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/^[a-zA-Z0-9]*$/, 'Password can contain only letters and numbers')
      .required('Required'),
    passwordRepeat: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
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
      onSubmit={async (values, actions) => {
        try {
          await register({
            email: values.email,
            password: values.password,
          }).unwrap();
          actions.setSubmitting(false);
          navigate('/');
        } catch (error: any) {
          actions.setSubmitting(false);
          alert(`${error.code || 'Error'}: ${error.message || 'Something went wrong'}`);
        }
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