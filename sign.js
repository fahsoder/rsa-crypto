const crypto = require('crypto')
const fs = require('fs')

const private_key = fs.readFileSync('./keys/private_key.pem')

const message = fs.readFileSync('./sign_document.txt', 'utf-8')

// RSA-SHA256 
// RSA = Par de chaves (bloquear e acessar o conteudo)
// SHA256 = Criptografia em 256 bits (gerar o conteudo)
const signer = crypto.createSign('RSA-SHA256')
signer.update(message)

// hex = representa uma sequência de caracteres hexadecimais da chave fornecida
const sign = signer.sign(private_key, 'hex')


fs.writeFileSync('./signed.txt', sign)

console.log('\n\n=== SIGN ===')
console.log(sign)