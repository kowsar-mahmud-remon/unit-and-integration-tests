export function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    throw new Error(`Invalid email address`);
  }
};

