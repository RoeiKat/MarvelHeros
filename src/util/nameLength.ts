export const nameLength = (str: string) => {
  if (str.length > 24) return str.substring(0, 24) + "...";
  else return str;
};
