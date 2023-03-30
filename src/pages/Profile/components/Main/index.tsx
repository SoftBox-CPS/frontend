import React, {FC} from "react";
import styles from "./Main.module.scss";
import {Route, Routes} from "react-router-dom";

const Main: FC = () => {
  return (
      <div className={styles.container}>
          <Routes>
              <Route path='settings' element={<h3>Настройки профиля</h3>} />
              <Route path='staffers' element={<h3>Сотрудники</h3>} />
              <Route path='notifications' element={<h3>Уведомления</h3>} />
              <Route path='requisites' element={<h3>Реквизиты</h3>} />
              <Route path='history' element={<h3>История сделок</h3>} />
              <Route path='showcase' element={<h3>Витрина</h3>} />
              <Route path='shop_info' element={<h3>Информация о магазине</h3>} />
          </Routes>
      </div>
  );
};

export default Main;
