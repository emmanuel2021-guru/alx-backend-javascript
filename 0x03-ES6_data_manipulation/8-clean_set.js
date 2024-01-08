export default function cleanSet(set, startString) {
  let returnString = '';
  let splitString;
  if (startString && typeof(startString) === 'string') {
    for (const item of Array.from(set)) {
      console.log(item);
      if (item && item.split(startString).length !== 1) {
        splitString = item.split(startString);
        console.log(splitString);
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
