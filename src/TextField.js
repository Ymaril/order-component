import React from "react";
import styles from "./TextField.module.css";
import error_messages from "./error_messages";

function TextField({ label, error, children }) {
  return (
    <div className={styles["text-field"]}>
      <label className={styles["label"]}>
        {label}
        {children}
      </label>
      {error?.type && (
        <span className={styles["error"]}>{error_messages[error.type]}</span>
      )}
    </div>
  );
}

export default TextField;
