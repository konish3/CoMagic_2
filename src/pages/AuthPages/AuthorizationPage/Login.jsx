import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "antd/es/form/Form";
import { observer } from "mobx-react-lite";

import { AUTH_ROUTES, MAIN_ROUTES } from "../../../helpers/constants/constants";
import { LoginView } from "./Login.view";
import AuthStore from "../../../store/auth/authStore";

export const Login = observer(() => {
  const { users } = AuthStore;
  const navigate = useNavigate();

  const navigateToRegistration = () => {
    navigate(`/${AUTH_ROUTES.REGISTRATION}`);
  };

  const onFinishHandler = (values) => {
    if (!users.length) return alert("Вы не зарегистрированы!");
    const isExistUser = users.some(
      (item) => item.email === values.email && item.password === values.password
    );
    if (isExistUser) {
      navigate(`/${MAIN_ROUTES.HOTEL_FEED}`);
    } else {
      alert("Вы ввели некорректные данные!");
    }
  };

  return (
    <Form
      name="login"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      initialValues={{ remember: true }}
      onFinish={onFinishHandler}
    >
      <LoginView navigateRegistration={navigateToRegistration} />
    </Form>
  );
});
