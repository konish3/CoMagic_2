import styles from "./HotelCard.module.css";
import { Card, Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTES } from "../../helpers/constants/constants";

const { Paragraph } = Typography;

export const HotelCard = ({
  id,
  title,
  description,
  price,
  src,
  alt,
  style,
  span = 8,
  rowsDescription = 6,
}) => {
  const navigate = useNavigate();

  const navigateToHotel = () => {
    navigate(`/${MAIN_ROUTES.ABOUT_HOTEL}/${id}`);
  };

  return (
    <Col span={span}>
      <Card
        hoverable
        style={style}
        cover={<img className={styles.imgcard} alt={alt} src={src} />}
        actions={[
          <div className={styles.actionsCard}>
            <p className={styles.price}>от {price} руб./ночь</p>
            <button className={styles.btn} onClick={navigateToHotel}>
              Подробнее
            </button>
          </div>,
        ]}
      >
        <div>
          <Paragraph
            ellipsis={{
              rows: 1,
              expandable: true,
              symbol: "еще",
            }}
            className={styles.titleCard}
          >
            {title}
          </Paragraph>
          <Paragraph
            ellipsis={{
              rows: rowsDescription,
              expandable: true,
              symbol: "еще",
            }}
          >
            {description}
          </Paragraph>
        </div>
      </Card>
    </Col>
  );
};
