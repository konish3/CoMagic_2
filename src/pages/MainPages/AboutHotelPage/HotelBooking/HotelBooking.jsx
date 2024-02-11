import { useEffect, useState } from "react";
import { Card, DatePicker, Slider, InputNumber, Checkbox, Modal } from "antd";
import dayjs from "dayjs";

import styles from "./HotelBooking.module.css";
import { getBookingDays } from "../../../../helpers/functions/getBookingDays/getBookingDays";

const { RangePicker } = DatePicker;

const disabledDate = (current) => {
  return current && current < dayjs().endOf("day");
};

export const HotelBooking = ({ reserve, price }) => {
  const [currentGuests, setCurrentGuests] = useState(1);
  const [bookingDays, setBookingDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);
  const [activeCheckbox, setActiveCheckbox] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilled, setIsFilled] = useState(true);

  const handleCancelOrShow = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onChangeGuests = (newValue) => {
    setCurrentGuests(newValue);
  };

  const onChangeDate = (dates, dateStrings) => {
    setBookingDays(getBookingDays(dateStrings[0], dateStrings[1]));
    setIsFilled(!isFilled);
  };

  const onChangeCheckbox = (checkedValues) => {
    setActiveCheckbox(checkedValues);
  };

  const onBookingHotel = () => {
    handleCancelOrShow();
    reserve({
      guests: currentGuests,
      days: bookingDays,
      price: totalPrice,
      checkbox: activeCheckbox,
    });
  };

  useEffect(() => {
    if (isNaN(bookingDays)) setBookingDays(1);

    setTotalPrice(
      price * currentGuests * (bookingDays === 0 ? 1 : bookingDays)
    );
  }, [currentGuests, bookingDays, price]);

  return (
    <>
      <Modal
        title="Подтверждено!"
        open={isModalOpen}
        onOk={handleCancelOrShow}
        onCancel={handleCancelOrShow}
      >
        <p>Исходная стоимость: {totalPrice} руб.</p>
        <p>Гостей: {currentGuests} </p>
        <p>Дополнительные услуги: {`${activeCheckbox}`} </p>
      </Modal>
      <Card
        style={{ margin: 10, fontSize: 22 }}
        title="Забронировать номер"
        actions={[
          <div className={styles.actions}>
            <p>Стоимость: от {totalPrice} руб.</p>
            <button
              disabled={isFilled}
              onClick={onBookingHotel}
              className={styles.btn}
            >
              Забронировать
            </button>
          </div>,
        ]}
      >
        <div className="">
          <h3 className={styles.titleItem}>Количество гостей</h3>
          <div className={styles.slider}>
            <Slider
              style={{ width: "100%" }}
              min={1}
              max={8}
              onChange={onChangeGuests}
              value={typeof currentGuests === "number" ? currentGuests : 0}
            />

            <InputNumber
              min={1}
              max={8}
              style={{
                margin: "0 16px",
              }}
              value={currentGuests}
              onChange={onChangeGuests}
            />
          </div>
          <div className={styles.date}>
            <h3 className={styles.titleItem}>
              Период проживания <span className={styles.require}>*</span>
            </h3>

            <RangePicker
              // required="true"
              name="date"
              onChange={onChangeDate}
              disabledDate={disabledDate}
            />
          </div>
          <div>
            <h3 className={styles.titleItem}>Дополнительные услуги</h3>
            <Checkbox.Group
              className={styles.checkbox}
              onChange={onChangeCheckbox}
              name="checkbox"
            >
              <Checkbox value="SPA" style={{ margin: 10 }}>
                SPA
              </Checkbox>
              <Checkbox value="Бассейн" style={{ margin: 10 }}>
                Бассейн
              </Checkbox>
              <Checkbox value="Ресторан" style={{ margin: 10 }}>
                Ресторан
              </Checkbox>
              <Checkbox value="Тренажерный зал" style={{ margin: 10 }}>
                Тренажерный зал
              </Checkbox>
            </Checkbox.Group>
          </div>
        </div>
      </Card>
    </>
  );
};
