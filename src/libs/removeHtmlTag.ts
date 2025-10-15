export const removeHtmlTag = (str: string) => {
  const ret = str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  return ret;
};
