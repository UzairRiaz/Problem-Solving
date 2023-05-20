

class Debounce {
    constructor(func, delay, leading = false) {
        this.timeoutId = null;
        this.func = func;
        this.delay = delay;
        this.leading = leading;
    }

    call = (...args) => {
        if (this.leading) {
            // will be called only w
            if (!this.timeoutId) {
                this.func(...args);
                this.timeoutId = setTimeout(() => {
                    this.timeoutId = null;
                }, this.delay);
            }
        } else {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.func(...args);
            }, this.delay);
        }
    }
}

const debounce = new Debounce(console.log, 500, true);
debounce.call(6);
debounce.call(1);
debounce.call(2);
debounce.call(3);
setTimeout(() => {
    debounce.call(4);
    debounce.call(5);
    debounce.call(6);
}, 1000);
