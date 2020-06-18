import React from 'react';
import input_styles from '../inputs.module.css';

function TextInput({ name, register, error, className, placeholder, type}) {
  return (
      <input
          name={name}
          id={name}
          ref={register}
          type={type || "text"}
          className={`${className} ${input_styles['text-input']} ${error && input_styles['is-invalid']}`}
          placeholder={placeholder}
      />
  );
}

export default TextInput;
