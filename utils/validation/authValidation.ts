export const passwordMatchValidation = (
  password1: string,
  password2: string
): boolean => {
  let isValid: boolean;
  password1 === password2 ? (isValid = true) : (isValid = false);
  return isValid;
};

export const emailValidation = (email: string): boolean => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};
