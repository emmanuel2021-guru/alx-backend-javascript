export default function getListStudentIds(objArray) {
  let idArray = [];

  if (objArray instanceof Array) {
    idArray = objArray.map((item) => item.id);
  } else {
    idArray = [];
  }
  return idArray;
}
