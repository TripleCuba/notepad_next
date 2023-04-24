export const emptyDataValidation = (data: {}): boolean => {
  let isValid: boolean;
  let dataArray = Object.values(data);
  let stringArray = dataArray.filter((element) => typeof element === "string");
  stringArray.every((element: any) => element.length)
    ? (isValid = true)
    : (isValid = false);
  return isValid;
};
