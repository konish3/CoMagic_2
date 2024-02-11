import { Button, Checkbox, Form, Input, Select } from "antd";

const { Option } = Select;

export const RegistrationView = ({ navigateToLogin }) => {
  return (
    <>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input style={{ width: 400 }} placeholder="Почта" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password style={{ width: 400 }} placeholder="Пароль" />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          style={{ width: 400 }}
          placeholder="Подтвердите пароль"
        />
      </Form.Item>

      <Form.Item
        name="nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input style={{ width: 400 }} placeholder="Введите ваш ник" />
      </Form.Item>

      <Form.Item
        style={{ width: 400 }}
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          style={{ width: 400 }}
          placeholder="Номер телефона"
          addonBefore={
            <Form.Item name="prefix" noStyle>
              <Select
                style={{
                  width: 70,
                }}
              >
                <Option value="7">+7</Option>
                <Option value="375">+375</Option>
              </Select>
            </Form.Item>
          }
        />
      </Form.Item>

      <Form.Item
        name="gender"
        rules={[
          {
            required: true,
            message: "Пожалуйста, укажите пол!",
          },
        ]}
      >
        <Select style={{ width: 400 }} placeholder="Укажите ваш пол">
          <Option value="Женщина">Женщина</Option>
          <Option value="Мужчина">Мужчина</Option>
          <Option value="Другой">Другой</Option>
        </Select>
      </Form.Item>

      <Form.Item
        style={{
          marginBottom: 40,
          width: 400,
        }}
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Нужно принять соглашение")),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>

      <Form.Item
        style={{
          width: 500,
        }}
      >
        <Button
          style={{ marginRight: 20 }}
          size="large"
          type="primary"
          htmlType="submit"
        >
          Зарегистрироваться
        </Button>
        <Button
          onClick={navigateToLogin}
          size="large"
          type="dashed"
          htmlType="button"
        >
          Войти
        </Button>
      </Form.Item>
    </>
  );
};
