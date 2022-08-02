export default function getStudentIdsSum(array) {
  return array.reduce((total, element) => total + element.id, 0);
}
