import { Table } from "antd";
import { observer } from "mobx-react-lite";

import MainStore from "../../../../store/main/mainStore";
import { COLUM_HISTORY } from "../../../../helpers/constants/constants";

export const HistoryBooking = observer(() => {
  const { historyBooking } = MainStore;
  const Data = historyBooking.map((item, index) => ({
    key: index,
    name: item?.title,
    countDay: item?.data.days,
    address: item?.address.city,
    guests: item?.data.guests,
    other: `${item?.data.checkbox}`,
  }));

  return (
    <>
      <Table columns={COLUM_HISTORY} dataSource={Data} />
    </>
  );
});
