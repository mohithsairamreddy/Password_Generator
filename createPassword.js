const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_=+.,/~'

const createPassword = (length = 10 , hasNumber = true, hasSymbol = true) => {
    let chars = alpha
    hasNumber ? (chars += numbers) : ''
    hasSymbol ? (chars += symbols) : ''
    return generatePassword(length,chars)
}

const generatedPassword = (length,chars) => {
    let password = ''
    for(let i = 0; i < length; i++){
        password += chars.charAt(Math.random() * chars.length)
    }
    return password
}

export default createPassword