const privateKey = require('../src')
const publicKey = require('@voken/public-key')
const vokenAddress = require('@voken/address')

// vprivanGbdNTPCBCCy49tfFUN6DR6kcW59pmswcMj3R0JD1AP5dN1eHQG
// vprivPWT238x13x4y140N3dqqF0EgKd2VN9ruB7Bp7wyekyn8ynMH53h0

const vpriv = 'vprivPWT238x13x4y140N3dqqF0EgKd2VN9ruB7Bp7wyekyn8ynMH53h0'
console.log('vpriv:', vpriv)

const bufPrivateKey = privateKey.fromVPriv(vpriv)
console.log('bufPrivateKey:', bufPrivateKey)
console.log('bufPrivateKey:', bufPrivateKey.toString('hex'))

const strPrivateKey = privateKey.toVPriv(bufPrivateKey)
console.log('strPrivateKey:', strPrivateKey)

const bufPublicKey = publicKey.fromPrivateKey(bufPrivateKey)
console.log('bufPublicKey:', bufPublicKey)
console.log('bufPublicKey:', bufPublicKey.toString('hex'))

const bufPublicKeyDecompressed = publicKey.decompress(bufPublicKey)
console.log('bufPublicKeyDecompressed:', bufPublicKeyDecompressed)
console.log('bufPublicKeyDecompressed:', bufPublicKeyDecompressed.toString('hex'))


const vpub = publicKey.toVPub(bufPublicKey)
console.log('vpub:', vpub)

const address = vokenAddress.fromPublicKey(bufPublicKey)
console.log('address:', address)


// console.log(privateKey.toVPriv())
// console.log(privateKey.toVPriv(Buffer.from('111db6e9b79c2861d1b018eb0bf4c8a00b9f902ad4d6b53014bb5a6d84573286', 'hex')))

// const bufPrivateKey = Buffer.from('111db6e9b79c2861d1b018eb0bf4c8a00b9f902ad4d6b53014bb5a6d84573286', 'hex')
// console.log('bufPrivateKey:', bufPrivateKey)


// const bufPublicKey = publicKey.fromPrivateKey(bufPrivateKey)
// const bufPublicKeyCompressed = publicKey.fromVPub('vpub085Q5sJNAW3H933syBU0aM4cwXdQT92prPPEn08237T3g72njEP4p')
// console.log('bufPublicKeyCompressed:', bufPublicKeyCompressed)
//
// const address = vokenAddress.fromPublicKey(bufPublicKeyCompressed)
// console.log('address:', address)
//
// const hexPublicKeyCompressed = bufPublicKeyCompressed.toString('hex')
// console.log('hexPublicKeyCompressed:', hexPublicKeyCompressed)
//
// const bufPublicKeyUncompressed = publicKey.decompress(bufPublicKeyCompressed)
// console.log('bufPublicKeyUncompressed:', bufPublicKeyUncompressed)

//
// const strPublicKey = publicKey.toVPub(bufPublicKeyCompressed)
// console.log('strPublicKey:', strPublicKey)
//
//
//
//
//
// const hexPublicKeyCompressed = '020b72e6555747148c79faf605508cef9b7d2456c5acea810219f4381c5593ac4b'
// console.log('hexPublicKeyCompressed:', hexPublicKeyCompressed)
//
// const bufPublicKeyCompressed = Buffer.from(hexPublicKeyCompressed, 'hex')
// console.log('bufPublicKeyCompressed:', bufPublicKeyCompressed)
//
// const bufPublicKeyUncompressed = publicKey.decompress(bufPublicKeyCompressed)
// console.log('bufPublicKeyUncompressed:', bufPublicKeyUncompressed)


// b77421a3c11f89f090151b6f7781d09b45caa71b59d763f7ee9fea8fd69128e2