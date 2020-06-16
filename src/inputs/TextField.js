import React from 'react';
import './TextField.css';

function TextField({ label, name, register, error }) {
  return (
      <div className="text-field">
          <label htmlFor={name} className="text-field__label">{label}</label>
          <input
              name={name}
              id={name}
              ref={register}
              className={`text-field__input ${error && "text-field__input_is-invalid"}`}
          />
          {error?.message && <span className="text-field__error">{error.message}</span>}
      </div>
  );
}

export default TextField;
