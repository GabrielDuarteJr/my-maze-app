export const removeHTMLTags = (str: string) => {
  if (str) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
  }

  return '';
}
