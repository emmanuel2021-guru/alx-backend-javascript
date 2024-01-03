export default function updateStudentGradeByCity(studentList, city, newGrades) {
  let result;

  if (studentList instanceof Array && city && newGrades) {
    result = studentList
      .filter((student) => (student.location).includes(city))
      .map((student) => {
        const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
        return {
          ...student,
          grade: foundGrade ? foundGrade.grade : 'N/A',
        };
      });
  } else {
    result = [];
  }
  return result;
}
