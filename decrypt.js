const fs = require('fs')
const crypto = require('crypto')

const privateKey = fs.readFileSync('./keys/private_key.pem', 'utf-8')
const encrypted = fs.readFileSync('./secret.file')

const decrypted = crypto.privateDecrypt({
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
}, encrypted)

fs.writeFileSync('./public.txt', decrypted)

console.log(`Decrypted data: ${decrypted.toString()}`)