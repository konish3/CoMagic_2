import { useNavigate, useParams } from "react-router-dom";
import { Layout, Card, Rate, Carousel, Typography } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

import styles from "./AboutHotel.module.css";
import { HotelBooking } from "./HotelBooking/HotelBooking";
import { CustomHeader } from "../../../_shared/CustomHeader/CustomHeader";
import MainStore from "../../../store/main/mainStore";
import { observer } from "mobx-react-lite";
import { MAIN_ROUTES } from "../../../helpers/constants/constants";

const { Content, Sider } = Layout;
const { Paragraph } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export const AboutHotel = observer(() => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { addBooking, getHotelById } = MainStore;
  const hotel = getHotelById(id);

  if (!hotel) {
    navigate(MAIN_ROUTES.HOTEL_FEED);
  }

  const reserve = (data) => {
    addBooking({
      title: hotel.title,
      address: hotel.address,
      id,
      data,
    });
  };

  return (
    <div>
      <Layout>
        <CustomHeader defaultSelectedKeys={0} />
        <Layout>
          <Layout
            style={{
              width: "100%",
            }}
          >
            <Content>
              <Card className={styles.card}>
                <div style={{ display: "flex" }}>
                  <img
                    className={styles.img}
                    src={hotel?.img.src}
                    alt={hotel?.img.alt}
                  />
                  <div className={styles.content}>
                    <h2 className={styles.title}>{hotel.title}</h2>
                    <Rate disabled defaultValue={hotel.stars}></Rate>
                    <p className={styles.price}>от {hotel.price} руб./ночь</p>
                    <p
                      className={styles.address}
                    >{`${hotel.address.city}, ${hotel.address.street}`}</p>
                  </div>
                </div>
                <p className={styles.description}>{hotel.description}</p>
                <div className={styles.imgWithFeedback}>
                  <Carousel className={styles.slider} autoplay>
                    {Array.from({ length: 4 }, (_, i) => {
                      return (
                        <div>
                          <img
                            className={styles.imageInSlider}
                            src={hotel.images[i + 1]}
                            alt={hotel.img.alt}
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                  <div className={styles.feedback}>
                    <Rate
                      style={{ margin: "0 0 20px 0" }}
                      defaultValue={hotel.feedback.rating}
                      character={({ index = 0 }) => customIcons[index + 1]}
                    />
                    <Card title={hotel.feedback.title}>
                      <Paragraph
                        ellipsis={{
                          rows: 5,
                          expandable: true,
                          symbol: "more",
                        }}
                      >
                        {hotel.feedback.description}
                      </Paragraph>
                    </Card>
                  </div>
                </div>
              </Card>
            </Content>
          </Layout>
          <Sider width="25%">
            <HotelBooking reserve={reserve} price={hotel.price} />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
});
