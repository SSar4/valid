const validCpf = (input) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/g
    const result = regex.test(input)

    return result
}
const validCnpj = (input) => {
    const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/g
    const result = regex.test(input)

    return result
}
const validPhone = (mask, input) => {
    const regex = new RegExp(mask)
    const result = regex.test(input)

    return result
}

const validEmail = (input) => {
    const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const result = regex.test(input)

    return result
}

module.exports = { validCpf, validCnpj, validPhone, validEmail }
