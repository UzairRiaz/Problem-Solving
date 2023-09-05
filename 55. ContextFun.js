Function.prototype.callPolyfill = function (context, ...args) {
    return this.apply(context, args);
}


function increment() { this.count++; return this.count; }
console.log(increment.callPolyfill({ count: 1 }));
