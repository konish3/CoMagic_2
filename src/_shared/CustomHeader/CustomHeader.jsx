import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { MAIN_ROUTES } from "../../helpers/constants/constants";

const { Header } = Layout;

export const CustomHeader = ({ style, defaultSelectedKeys }) => {
  const navigate = useNavigate();

  const navigateToProfile = (e) => {
    if (e.key === "2") {
      navigate(`/${MAIN_ROUTES.USER_PROFILE}`);
    } else {
      navigate(`/${MAIN_ROUTES.HOTEL_FEED}`);
    }
  };

  return (
    <Header style={style}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[`${defaultSelectedKeys}`]}
        onClick={navigateToProfile}
        items={[
          {
            key: "1",
            label: "Лента",
          },
          {
            key: "2",
            icon: <UserOutlined />,
          },
        ]}
      />
    </Header>
  );
};
