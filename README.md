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

# react-hooks

# React hooks

- React way to adding completx functionality to our component when we create them with JavaScript Functions
- Always starts with "use" naming Convension
- Must be called at the top level of component
- Never be called inside Looks, Condition and Nested Functions, because React use it in the appropriate Render Cycle
- React hools only be called from React Functions / functional component

## useState

- create, store, update component state
- runs asyncronously , component re-render with updated state
- we receive an array of 2 elements
- current value of the state and set of Functions to update the state
- when state change the component that own the state will be re-rendered as well as ite entire child components tree, any component that is a part of the parent component gets re-render
- Important: the inline functions get executed before the view is returned, it may block the rendering of component
- rendering the components should be block by using use useEffect, it is the better way

## useEffect

- React runs useEffect Hook asynchronously after the view has been rendered
- the 'return' function in useEffect is a clean up function
- clean up function is trigger once when the component unmounted
- clean up function is trigger everytime when the dependency change
