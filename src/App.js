import React from 'react';
import styles from './App.module.css';
import Order from "./Order";

function App() {
  return (
      <div className={styles['container']}>
          <Order/>
      </div>
  );
}

export default App;
