class Queue {
    constructor() {
        this.data = []; // is the list in which we store our elements
        this.rear = 0; // is used to store the position in which next element will be stored
        this.size = 10; // maximum number of elements a queue can have
    }

    enqueue(el) {
        if (this.rear < this.size) {
            this.data[this.rear] = el;
            this.rear += 1;
        }
    }

    length() {
        return this.rear;
    }

    isEmpty() {
        return this.rear === 0;
    }

    getFront() {
        if (this.isEmpty() === false) {
            return this.data[0];
        }
    }

    getLast() {
        if (this.isEmpty() === false) {
            return this.data[this.rear - 1];
        }
    }

    dequeue() {
        if(this.isEmpty() === false) {
        this.rear -= 1;
        return this.data.shift();
        }
    }
    
    print() {
        for(let i=0; i < this.rear; i++) {
            console.log(this.data[i]);
        }
    }

    clear() {
        this.data.length = 0;
        this.rear = 0;
    }
    
}

let queue_a = new Queue();
queue_a.enqueue({bus:{passangers:20}});
queue_a.enqueue({minivan:{passangers:6}});
queue_a.enqueue({vagon:{passangers:5}});
queue_a.print();
