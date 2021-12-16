const errorCodes = {
  EMAIL_NOT_FOUND: "Пользователя с таким e-mail нет в нашем списке",
  EMAIL_EXISTS: "e-mail уже занят",
  INVALID_EMAIL: "Не правильный e-mail",
  INVALID_PASSWORD: "Не верный пароль попробуйте еще раз"
};
export function error(code: number) {
  return errorCodes[code] ? errorCodes[code] : 'unknow error';
}
