import React from 'react';
import { useField } from 'formik';

import styles from './AllFields.module.scss';

const { checkboxWrapper, error, label } = styles;

const Checkbox = ({ children, prop }: { children: any, prop: any }) => {

  const [field, meta] = useField({ ...prop, type: 'checkbox' });

  return (
    <div className={checkboxWrapper}>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...prop} />
        <span className={label}>{children}</span>
      </label>
      {meta.touched && meta.error ? (
        <div className={error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Checkbox;