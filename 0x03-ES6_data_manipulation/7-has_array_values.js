export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (Array.from(set).find((ele) => ele === item) === undefined) {
      return false;
    }
  }
  return true;
}
