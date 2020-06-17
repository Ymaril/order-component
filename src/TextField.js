import React from 'react';
import styles from './TextField.module.css';

function TextField({ label, error, children }) {
  return (
      <div className={styles['text-field']}>
          <label className={styles['label']}>
              {label}
              {children}
          </label>
          {error?.message && <span className={styles['error']}>{error.message}</span>}
      </div>
  );
}

export default TextField;
