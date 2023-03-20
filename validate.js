const crypto = require('crypto')
const fs = require('fs')

const public_key = fs.readFileSync('./keys/public_key.pem', 'utf-8')

const message = fs.readFileSync('./sign_document.txt', 'utf-8')

const sign = fs.readFileSync('./signed.txt', 'utf-8')

// RSA-SHA256 
// RSA = Par de chaves (bloquear e acessar o conteudo)
// SHA256 = Criptografia em 256 bits (gerar o conteudo)
const verifier = crypto.createVerify('RSA-SHA256')
verifier.update(message)

// hex = representa uma sequência de caracteres hexadecimais da chave fornecida
const result = verifier.verify(public_key, sign, 'hex')

fs.writeFileSync('./validated.txt', result.toString())

console.log('\n\n===VERIFY===')
console.log(sign)
console.log('\n\n===result===')
console.log(result)