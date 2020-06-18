import React from 'react';
import styles from '../inputs.module.css';

function TextAreaInput({ name, register, error, className }) {
  return (
      <textarea
          name={name}
          id={name}
          ref={register}
          className={`${className} ${styles['text-input']} ${error && styles['is-invalid']}`}
      />
  );
}

export default TextAreaInput;
