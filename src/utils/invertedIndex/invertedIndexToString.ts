// Util function to convert inverted index object to string
export const invertedIndexToString = (
  invertedIndexObj: Record<string, number[]>
): string => {
  // Calculate the total number of words
  const numWords = Object.values(invertedIndexObj).reduce(
    (total, currentArray) => total + currentArray.length,
    0
  );

  // Create array to store words based on index
  const wordArray = Array.from({ length: numWords }, () => "");

  // Map words to each index of the word array
  Object.keys(invertedIndexObj).forEach((word) => {
    const indexesArr = invertedIndexObj[word];
    if (indexesArr) {
      indexesArr.forEach((index) => {
        wordArray[index] = word;
      });
    }
  });

  // Combine words in array separated by " " to reconstruct original text
  const outputString = wordArray.join(" ");

  return outputString;
};
