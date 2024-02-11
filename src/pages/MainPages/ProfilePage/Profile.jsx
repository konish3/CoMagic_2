import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import { Card } from "antd";
import { observer } from "mobx-react-lite";

import { CustomHeader } from "../../../_shared/CustomHeader/CustomHeader";
import { HistoryBooking } from "./HistoryBooking/HistoryBooking";
import "./Profile.module.css";
import AuthStore from "../../../store/auth/authStore";

export const Profile = observer(() => {
  const { users } = AuthStore;

  return (
    <>
      <Layout style={{ width: "90%", borderRadius: 50 }}>
        <CustomHeader defaultSelectedKeys={2} />
        <Content style={{ width: "100%", backgroundColor: "#f0f9ff" }}>
          <Card title={`Здравствуйте, ${users[0]?.nickname}`}>
            <div>
              <h2>Ваши данные</h2>
              <p>
                Ваша почта:{" "}
                <span contentEditable="true">{users[0]?.email}</span>
              </p>
              <p>
                Номер телефона:{" "}
                <span contentEditable="true">{users[0]?.phone}</span>
              </p>
              <p>
                Ваш пол: <span contentEditable="true">{users[0]?.gender}</span>
              </p>
            </div>
            <div>
              <h2>Ваша история бронирования</h2>
              <HistoryBooking />
            </div>
          </Card>
        </Content>
      </Layout>
    </>
  );
});
