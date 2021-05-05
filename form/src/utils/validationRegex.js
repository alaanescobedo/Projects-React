const Validation = {
  user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letters, numbers, underscore and upperscore
  name: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, // Letters and space, can contain accent mark
  password: /^.{4,12}$/, // 4 - 12 characters
  email: /^[a-zA-Z0-9_.+-]+@[a-z-A-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/, // 7 - 14 digits
};
export default Validation;
