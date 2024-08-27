export const convertDateToUSFormat = (date: string): string => {
  const [day, month, year] = date.split('-');
  return `${month}/${day}/${year}`;
};
