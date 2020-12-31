const base32 = require('@voken/base32')

const fromVPriv = function (input) {
  if (!input instanceof String) {
    throw TypeError('Except: String')
  }

  if ('vpriv' !== input.slice(0, 5)) {
    throw new InvalidStartError('A VOKEN Private Key must start with `vpriv`')
  }

  input = input.slice(5)

  if (input.length !== 52) {
    throw new InvalidLengthError('The length of a VOKEN Private Key must be `57`')
  }

  let bufPrivateKey = Buffer.from(base32.decode(input))

  while (bufPrivateKey.length < 32) {
    bufPrivateKey = Buffer.concat([Buffer.from('00', 'hex'), bufPrivateKey])
  }

  return bufPrivateKey
}

class InvalidStartError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidStartError';
    this.code = 'INVALID_START'
  }
}

class InvalidLengthError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidLengthError";
    this.code = 'INVALID_LENGTH'
  }
}

module.exports = {
  fromVPriv: fromVPriv,
  InvalidStartError: InvalidStartError,
  InvalidLengthError: InvalidLengthError,
}
