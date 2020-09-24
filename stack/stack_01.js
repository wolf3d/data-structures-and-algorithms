class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(item) {
        this.data[this.top] = item;
        this.top += 1;
    }

    length() {
        return this.top;
    }

    peek() {
        return this.data[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }

    pop() {

        if (this.isEmpty === false) {
            this.top -= 1;
            return this.data.pop();
        }
    }

    print() {
        let top = this.top - 1;
        while (top >= 0) {            
            console.log(this.data[top]);
            top--;
        }
    }

    reverse() {
        this._reverse(this.top - 1);
    }

    _reverse(index) {
        if (index != 0) {
            this._reverse(index - 1)
        }
        console.log(this.data[index]);
    }
}

let stack01 = new Stack();
stack01.push({a:0});
console.log(stack01.peek());
stack01.push({a:1});
console.log(stack01.peek());
stack01.push({a:2});
console.log(stack01.peek());
console.log("------");
stack01.print();
