import ArrayBufferConverter from '../app';

test('Данные преоблразуются в строку', () => {
    const converter = new ArrayBufferConverter();
    const data = converter.load();
    const dataString = converter.toString(data);
    const correct = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    expect(dataString).toBe(correct);
});
