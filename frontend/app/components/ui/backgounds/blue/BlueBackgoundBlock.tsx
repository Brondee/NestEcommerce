import React from "react";
import styles from "./Styles.module.scss";

interface IProps {
  children: React.ReactNode;
}

const BlueBackgoundBlock: React.FC<IProps> = ({ children }) => {
  return <div className={styles.blue_back}>{children}</div>;
};

export default BlueBackgoundBlock;
