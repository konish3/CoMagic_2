import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import { AUTH_ROUTES } from "../../../helpers/constants/constants";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={navigate.bind(null, `${AUTH_ROUTES.LOGIN}`)}
        style={{ marginRight: 20 }}
        size="large"
        type="primary"
      >
        Войти
      </Button>
      <Button
        onClick={navigate.bind(null, `${AUTH_ROUTES.REGISTRATION}`)}
        size="large"
        type="dashed"
      >
        Зарегистрироваться
      </Button>
    </div>
  );
};
