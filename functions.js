const a = (values) => {
    if (values.trial) return b();
}

const b = () => console.log('Returning b');

module.exports = { a, b };