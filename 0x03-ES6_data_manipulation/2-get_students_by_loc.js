export default function getStudentsByLocation(array, location) {
  return (array.filter((element) => element.location === location));
}
