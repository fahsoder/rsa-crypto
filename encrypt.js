const fs = require('fs')
const crypto = require('crypto')

const publicKey = fs.readFileSync('./keys/public_key.pem', 'utf-8')
const data = 'RSA Crypto'

const encrypted = crypto.publicEncrypt({
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
}, Buffer.from(data))

fs.writeFileSync('./secret.file', encrypted)

console.log(`Encrypted data: ${encrypted.toString('base64')}`)