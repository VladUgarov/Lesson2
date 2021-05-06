const makeObjectDeepCopy = function (obj) {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(key => (clone[key] = typeof obj[key] === "object" ? makeObjectDeepCopy(obj[key]) : obj[key])
    );
    return clone
}

const selectFromInterval = function (arr, firstVal, secondVal) {
    if ((arr.some(el => typeof (el) !== "number")) || (typeof (firstVal) !== "number") || (typeof (secondVal) !== "number")) {
        throw new Error()
    }
    if (firstVal > secondVal) {
        let temp = secondVal
        secondVal = firstVal
        firstVal = temp
    }
    const result = arr.filter(el => (el >= firstVal) && (el <= secondVal))

    return result
}

const myIterable = {
    from: 1,
    to: 4,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },
    next() {
        if (this.current <= this.to) {
            return {done: false, value: this.current++};
        }
        else if(this.from == this.current && this.current > this.to){
            throw new Error()
        }
        else if (typeof (this.from) !== "number" || typeof (this.to) !== "number"){
            throw new Error()
        }
        else {
            return {done: true};
        }
    }

}

for (let item of myIterable) {
    console.log(item)
}
