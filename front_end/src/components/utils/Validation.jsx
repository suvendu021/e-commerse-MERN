/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Validation = (userName, email, passWord) => {
  const isUserNameValid = userName
    ? /^[A-Za-z][A-Za-z0-9_]{7,12}$/.test(userName)
    : true;

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passWord);

  if (!isUserNameValid) return "username is not valid";
  if (!isEmailValid) return "email is not valid";
  if (!isPasswordValid) return "passWord is not valid";

  return null;
};

export { Validation };
