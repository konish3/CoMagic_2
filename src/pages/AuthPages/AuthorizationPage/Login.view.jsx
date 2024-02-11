import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

export const LoginView = ({ navigateRegistration }) => {
  return (
    <>
      <Form.Item
        style={{ marginBottom: 50 }}
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          style={{ width: 400 }}
          size="large"
          prefix={<UserOutlined />}
          placeholder="Почта"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          style={{ width: 400 }}
          size="large"
          prefix={<LockOutlined />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button
          style={{ marginRight: 20 }}
          size="large"
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Войти
        </Button>
        <Button
          size="large"
          type="dashed"
          htmlType="button"
          className="login-form-button"
          onClick={navigateRegistration}
        >
          Зарегистрироваться
        </Button>
      </Form.Item>
    </>
  );
};
