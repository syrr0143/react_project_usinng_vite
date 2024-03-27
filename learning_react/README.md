# React + Vite

# Diffing 

Diffing short for Differences Algorithm is used to differentiate the DOM Tree for efficient updates. React utilize diffing algorithm to identify the changes in the newly created virtual dom and previous version of dom after any changes are made

# Reconsillation in React

React uses a technique called reconciliation to update the user interface (UI) efficiently. Reconciliation is the process of comparing the current state of the UI with the desired state, and then making the necessary changes to bring the two into sync.

React does this by maintaining a virtual DOM, which is a lightweight representation of the real DOM. When the state of a component changes, React updates the virtual DOM. It then compares the virtual DOM with the real DOM, and determines the most efficient way to update the real DOM to match the virtual DOM.

This process is very efficient because React only updates the parts of the DOM that have actually changed. This can result in significant performance improvements, especially for applications with complex UIs.

# Concept of key in react
Keys are introduced in React iterative elements to help React identify which items in the list have changed, are added, or are removed. This is important for performance optimization, especially during the re-render process.

Without keys, React would have to re-render the entire list every time there is a change, which could be very inefficient. With keys, React can only re-render the items that have changed, which can lead to significant performance improvements.

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => {
  return <li key={number}>{number}</li>;
});
```
# props

Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.

```js
const myElement = <Car brand="Ford" />;

```

# useState

``` 
 If you’re passing a function to the set function, it must be pure, it must take the previous state as the argument and return a new state.
``` 

 > functional components are stateless. 
 ---
 ### Initial State:
  During the first re-render this will have the value that you passed as the parameter.

### set Function: 
The set Function will let you update the value of the state to a different value and will trigger a re-render if the value provided in the set function is different.

```js
export default function Counter() {
    const [num, setNum] = useState(0);
    return (
        <>
            <h1>{num}</h1>
            <button onClick={() => {
                setNum(num + 1) // 0 + 1
                setNum(num + 1) // 0 + 1
                setNum(num + 1) // 0 + 1
            }}> +3 </button>
        </>
    )
}

```

### output -
increased only one time not 3 times , this is due the batching in react 

change after the whole code inside the block has finished running.

---
![image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*OuvB-B3LwoezEoaz7LPubQ.gif)
<div style="color: lightgray;margin: 0; font-size: 12px;">Image source: Medium</div>

---
 react uses Batching behind the scenes to update multiple state variables in only one re-render, it prevents too many re-renders to improve performance. But in the above example all the set functions in the block will be batched together, and the value of “num” will remain the same as it is not updating the previous value but overriding it.

```js
export default function Counter() {
    const [num, setNum] = useState(0);
    return (
        <>
            <h1>{num}</h1>
            <button onClick={() => {
                setNum(num => num + 1) // 0 + 1
                setNum(num => num + 1) // 1 + 1
                setNum(num => num + 1) // 2 + 1
            }}> +3 </button>
        </>
    )
}
```

this code can sol;ve the above probelm of batching ,
value of num increased three times here

# usecallback hook

##### useCallback(fn, dependencies) 

Call useCallback at the top level of your component to cache a function definition between re-renders:
```js
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  ```

  ``` 
  fn: 
  
  The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.

dependencies:

 The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison algorithm.

```

# Useeffect

useEffect

useEffect is a React Hook that lets you synchronize a component with an external system.
```js
useEffect(setup, dependencies?)
```
```js
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```