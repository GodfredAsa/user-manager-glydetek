const retResponse = (status, message, data) => {
    return { status, message, data }
}

module.exports = { retResponse}