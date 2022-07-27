import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((res) => {
    const array = [];
    res.forEach((values) => {
      if (values.status === 'fulfilled') {
        array.push({
          status: values.status,
          value: values.value,
        });
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
