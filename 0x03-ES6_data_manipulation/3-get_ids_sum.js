export default function getStudentIdsSum(objArray) {
  let result;

  if (objArray instanceof Array) {
    result = objArray.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  } else {
    result = 0;
  }
  return result;
}
