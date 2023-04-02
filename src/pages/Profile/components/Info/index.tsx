import React, {FC} from "react";
import styles from "./Info.module.scss";

const Info: FC = () => {
  return (
      <div className={styles.container}>
          <div className="row">
              <h4 className={styles.info_name}>SoftBox ID</h4>
              <h4 className={styles.info_content}>12345</h4>
          </div>
          <div className="row">
              <h4 className={styles.info_name}>Телефон</h4>
              <h4 className={styles.info_content}>88005553535</h4>
          </div>
      </div>
  );
};

export default Info;
