
# RSA Crypto

This project exemplifies the usage of RSA cryptography

You gonna see how to generate private and public keys and how to use them to encrypt and decrypt cryptographed messages

## Commands

- Generate private key: `openssl genrsa -out private_key.pem 2048`
- Generate public key: `openssl rsa -in private_key.pem -outform PEM -pubout -out public_key.pem`

## Reference

 - [Assinatura Digital, Tokens de Identidade e Criptografia com RSA](https://youtu.be/fyjas9u2LWQ)
