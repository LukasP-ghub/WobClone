import React, { useEffect } from 'react';
import { useField } from 'formik';

import styles from './AllFields.module.scss';

const { error, FieldStyle, FieldWrapper } = styles

const TextField = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <div className={FieldWrapper}>

      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input className={FieldStyle} {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className={error}>{meta.error}</div>
      ) : null}

    </div>
  );
};

export default TextField;