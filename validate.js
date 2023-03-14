const crypto = require('crypto')
const fs = require('fs')

const public_key = fs.readFileSync('./keys/public_key.pem', 'utf-8')

const message = 'rsa crypto'

const sign = fs.readFileSync('./signed.txt', 'utf-8')

const verifier = crypto.createVerify('RSA-SHA256')
verifier.update(message)

const result = verifier.verify(public_key, sign, 'hex')

fs.writeFileSync('./validated.txt', result.toString())

console.log('\n\n===VERIFY===')
console.log(sign)
console.log('\n\n===result===')
console.log(result)