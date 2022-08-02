export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter((element) => element.location === city)
    .map((student) => {
      const studentGrade = newGrades
        .filter((element) => element.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = studentGrade || 'N/A';
      return { ...student, grade };
    });
}
