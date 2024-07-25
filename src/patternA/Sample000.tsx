import { useEffect } from 'react';
import styles from "./Sample000.module.css";

function  Sample000() {
  // 初回のみ実行
  useEffect(() => {
  }, []);

  return (
    <div className={styles.tmpImageBGI} />
  );
};
    
export default Sample000;