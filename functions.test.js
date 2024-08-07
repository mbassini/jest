jest.mock('./functions');

const { a, b } = require('./functions');

beforeEach(() => {
    b.mockClear();
});

test('Should call b if trial is true', () => {
    a({ trial: true });
    expect(b).toHaveBeenCalled();
});