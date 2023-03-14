const crypto = require('crypto')
const fs = require('fs')

const private_key = fs.readFileSync('./keys/private_key.pem')

const message = 'rsa crypto'

const signer = crypto.createSign('RSA-SHA256')
signer.update(message)

const sign = signer.sign(private_key, 'hex')


fs.writeFileSync('./signed.txt', sign)

console.log('\n\n=== SIGN ===')
console.log(sign)