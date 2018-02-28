// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {return {property: 'value'};};
const createNotEnumerableProperty = (o) => {
    Object.defineProperty(Object.prototype, o, {value: 'value'});
    return o;
};
const createProtoMagicObject = () => {return Function;};
var count = 0;
const incrementor = () => {count++; return incrementor;};
incrementor.__proto__.valueOf = function () {return count;};
countAsync = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(++countAsync);
        }, 0);
    });
};
var countInc = 0;
const createIncrementer = () => {
    return {
        next : () => {
            return {value: ++countInc};
        },
        [Symbol.iterator]: function* () {
            yield ++countInc;
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(param);
        },1000);
    });
};
const getDeepPropertiesCount = (o) => {
    return Object.keys(o).length + (Object.keys(o).length ? Object.keys(o).reduce((prev,curr) => {
        return prev + getDeepPropertiesCount(o[curr]);
    },0) : 0);
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;