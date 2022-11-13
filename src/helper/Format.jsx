import dayjs from "dayjs";

var Format = {
  formartD(time, type) {
    var result = dayjs(time).format(`${type}`)
    return result;
  },
};

export default Format;