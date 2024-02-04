import getBuffer from './getbuffer';

export default class ArrayBufferConverter {
    load() {
        return getBuffer();
    }

    toString(data) {
        return String.fromCharCode.apply(null, new Uint16Array(data));
    }
}