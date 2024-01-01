export default function getStudentsByLocation(objArray, city) {
  let result;

  if (objArray instanceof Array && city != '') {
    result = objArray.filter((item) => (item.location).includes(city));
  } else {
    result = [];
  }
  return result;
}
