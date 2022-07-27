import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const array = [];
    values.forEach((values) => {
      if (values.status === 'fulfilled') {
        array.push(values);
      } else {
        array.push({
          status: values.status,
          value: `${values.reason}`,
        });
      }
    });
    return array;
  });
}
