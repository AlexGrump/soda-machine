export const currency = (value, currency = "$", digs = 2) => {
  return `${currency}${value.toFixed(digs)}`;
};

export default currency;
