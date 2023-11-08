import crypto from 'crypto';

function log(message) {
  console.log(message);
}

export function generateToken(logger) {
  const token = crypto.randomBytes(32).toString("hex");
  if (logger) logger(token);

  return token;
}