// function that removes italic tags from string

export const removeItalicTags = (str: string): string => {
  // Use a regular expression to match <i> and </i> tags and remove them
  const regex = /<\/?i>/gi;
  const result = str.replace(regex, "");

  return result;
};
