'use strict';

debugger;

class MyPromise extends Promise {
    constructor(handler) {
        debugger;
        super(handler);
        debugger;
    }
}

const myItem = new MyPromise((resolve, reject) => {
    debugger;
    resolve(123);
    debugger;
});

console.log('myItem instanceof Promise : ', myItem instanceof Promise);

(async () => {
    debugger;
    console.log('await myItem : ', await myItem);
    debugger;
    console.log('await new MyPromise : ', await new MyPromise((resolve) => {
        debugger;
        resolve(321);
        debugger;
    }));
    debugger;
})();