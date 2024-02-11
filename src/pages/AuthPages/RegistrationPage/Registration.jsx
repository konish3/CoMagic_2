import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import AuthStore from "../../../store/auth/authStore";
import { AUTH_ROUTES } from "../../../helpers/constants/constants";
import { RegistrationView } from "./Registration.view";

export const Registration = observer(() => {
  const { users, registretion } = AuthStore;
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const navigateToLogin = () => {
    navigate(`/${AUTH_ROUTES.LOGIN}`);
  };

  const onFinishHandler = (values) => {
    if (!users.length) {
      registretion(values);
      navigateToLogin();
      return;
    }
    const isExistUser = users.some((item) => item.email === values.email);
    if (isExistUser) {
      alert("Пользователь с таким email уже существует!");
      return;
    }
    navigateToLogin();
    registretion(values);
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinishHandler}
      initialValues={{
        prefix: "7",
      }}
    >
      <RegistrationView navigateToLogin={navigateToLogin} />
    </Form>
  );
});
