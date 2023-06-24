class EventEmitter {
    events = {}
    subscribe = (eventName, fn) => {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(fn)
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn)
            }
        }
    }