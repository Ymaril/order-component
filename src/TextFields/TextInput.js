import React from 'react';
import styles from './TextInput.module.css';

function TextInput({ name, register, error, className, placeholder}) {
  return (
      <input
          name={name}
          id={name}
          ref={register}
          type="text"
          className={`${className} ${styles['text-input']} ${error && styles['is-invalid']}`}
          placeholder={placeholder}
      />
  );
}

export default TextInput;
