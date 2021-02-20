const base32 = require('@voken/base32')


const fromVPriv = function (input) {
  if (!input instanceof String) {
    throw TypeError('Except: String')
  }

  if ('vpriv' !== input.slice(0, 5)) {
    throw new InvalidStartError('A VOKEN Private Key should start with `vpriv`')
  }

  input = input.slice(5)

  if (input.length !== 52) {
    throw new InvalidLengthError('The length of a VOKEN Private Key should be `57`')
  }

  let bufPrivateKey = Buffer.from(base32.decode(input))

  while (bufPrivateKey.length < 32) {
    bufPrivateKey = Buffer.concat([Buffer.from('00', 'hex'), bufPrivateKey])
  }

  return bufPrivateKey
}

const toVPriv = function (input) {
  if (input.length !== 32) {
    throw new InvalidLengthError('The length of a Private Key should be `32`')
  }

  return 'vpriv' + base32.encode(input)
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
  toVPriv: toVPriv,
  InvalidStartError: InvalidStartError,
  InvalidLengthError: InvalidLengthError,
}
