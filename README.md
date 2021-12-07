# react-qze54d

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-qze54d)

> comparison of object always checks reference not value

```
const x = {val1: 10}
console.log(x) // {val1: 10}
const y = x
console.log(y)  //{val1: 10}
y === x
true
x['val2'] = 20
console.log(x)  // {val1: 10, val2: 20}
y === x
true
console.log(y)  // {val1: 10, val2: 20}
const z = {...x}

console.log(z) // {val1: 10, val2: 20}
x === z
false
```
