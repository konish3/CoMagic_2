import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Layout, Row, Menu, Result } from "antd";

import { HotelCard } from "../../../_shared/HotelCard/HotelCard";
import { ITEM_FROM_FILTERS } from "../../../helpers/constants/constants";
import { CustomHeader } from "../../../_shared/CustomHeader/CustomHeader";
import MainStore from "../../../store/main/mainStore";

const { Content, Sider } = Layout;

export const HotelFeed = observer(() => {
  const { hotels, filters, removeFilter, addFilter, changeHotelList } =
    MainStore;

  const onDeSelectHandler = ({ key }) => {
    removeFilter(key);
  };

  const onSelectHandler = ({ keyPath }) => {
    addFilter(keyPath[1], keyPath[0]);
  };

  useEffect(changeHotelList, Object.values(filters));

  return (
    <div>
      <CustomHeader defaultSelectedKeys={1} />
      <Layout>
        <Sider
          style={{
            backgroundColor: "#f0f9ff",
            marginRight: -24,
          }}
          width={250}
        >
          <Menu
            theme="dark"
            mode="inline"
            multiple
            onSelect={onSelectHandler}
            selectedKeys={Object.values(filters)}
            onDeselect={onDeSelectHandler}
            style={{ height: "100%", borderRight: 0 }}
            items={ITEM_FROM_FILTERS}
          />
        </Sider>
        <Layout
          style={{
            width: "100%",
          }}
        >
          <Content
            style={{
              padding: 36,
              backgroundColor: "#f0f9ff",
              minHeight: "90vh",
            }}
          >
            <Row gutter={[24, 24]}>
              {hotels.length ? (
                hotels.map((item) => {
                  return (
                    <HotelCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      src={item.img.src}
                      alt={item.img.alt}
                      price={item.price}
                      stars={item.stars}
                      images={item.images}
                      feedback={item.feedback}
                    />
                  );
                })
              ) : (
                <Layout>
                  <Result
                    style={{
                      width: "calc(100vw - 274px)",
                      backgroundColor: "#f0f9ff",
                    }}
                    status="warning"
                    title="На данный момент нет доступных отелей по вашим требованиям."
                  />
                </Layout>
              )}
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
});
