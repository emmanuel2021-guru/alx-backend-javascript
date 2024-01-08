export default function cleanSet(set, startString) {
  let returnString = '';
  let splitString;
  if (startString) {
    for (const item of Array.from(set)) {
      if (item.split(startString) !== item) {
        splitString = item.split(startString);
        for (const token of splitString) {
          if (token !== '') {
            returnString += token;
          }
        }
        returnString += '-';
      }
    }
    returnString = returnString.slice(0, -1);
  }
  return returnString;
}
