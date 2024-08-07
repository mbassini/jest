const b = jest.fn();
const a = (values) => {
    if (values.trial) return b();
}

module.exports = { a, b };
