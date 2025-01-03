const data = [
    {
        question: "What are the falsy values in JavaScript?",
        answer: "Falsy values in JavaScript are values that evaluate to false in a Boolean context. These include: \n    - false \n    - 0 (the number zero) \n    - '' or \"\" (empty strings) \n    - null \n    - undefined \n    - NaN (Not-a-Number).\n\nWhen these values are used in conditional statements, they are treated as false.",
        example: "// Example\nif (0) {\n  console.log('Truthy');\n} else {\n  console.log('Falsy');\n} \n// Output: 'Falsy'"
      },
      {
        question: "What are the differences between const, let, and var?",
        answer: "The differences between const, let, and var are as follows:\n    - **const**: \n      - Block-scoped.\n      - Cannot be reassigned after declaration.\n      - Must be initialized at the time of declaration.\n    - **let**: \n      - Block-scoped.\n      - Can be reassigned.\n      - Can be declared without initialization.\n    - **var**: \n      - Function-scoped.\n      - Can be reassigned.\n      - Hoisted to the top of its scope but not initialized (undefined by default).\n\nUse const when you don’t intend to reassign the variable, let for variables that will change, and avoid var unless necessary for legacy code compatibility.",
        example: "// Example\nconst x = 10;\nx = 20; // Error: Assignment to constant variable\n\nlet y = 10;\ny = 20; // Works\n\nvar z = 10;\nz = 20; // Works\n\nfunction testVar() {\n  if (true) {\n    var a = 5;\n  }\n  console.log(a); // Outputs: 5\n}\n\nfunction testLet() {\n  if (true) {\n    let b = 5;\n  }\n  console.log(b); // Error: b is not defined\n}"
      },
      {
        question: "What is scoping in JavaScript? What is Block Scope and what is Lexical Scope?",
        answer: "Scoping in JavaScript refers to the accessibility of variables in different parts of the program.\n    - **Block Scope**: Variables declared with let and const are accessible only within the block they are defined in (e.g., inside a function or a loop).\n    - **Lexical Scope**: A function's scope is defined by its position in the code, meaning it has access to variables in its parent scope at the time it is defined.",
        example: "// Example of Block Scope\nif (true) {\n  let x = 10;\n}\nconsole.log(x); // Error: x is not defined\n\n// Example of Lexical Scope\nfunction outer() {\n  const outerVar = 'I am outer';\n  function inner() {\n    console.log(outerVar); // Works because of lexical scope\n  }\n  inner();\n}\nouter();"
      },
      {
        question: "What is the difference between == and ===?",
        answer: "\n    - **== (Equality Operator)**: Compares two values for equality after type conversion, if necessary.\n    - **=== (Strict Equality Operator)**: Compares two values for equality without type conversion.\n\nUse === to avoid unexpected results from type coercion.",
        example: "// Example\nconsole.log(5 == '5'); // true (type conversion happens)\nconsole.log(5 === '5'); // false (no type conversion)"
      },
      {
        question: "What is the difference between undefined and null?",
        answer: "\n    - **undefined**: A variable is declared but has not been assigned a value.\n    - **null**: Represents the intentional absence of a value.\n\nundefined is the default value for uninitialized variables, while null must be explicitly assigned.",
        example: "// Example\nlet a;\nconsole.log(a); // undefined\nlet b = null;\nconsole.log(b); // null"
      },
      {
        question: "What are some JavaScript data types?",
        answer: "JavaScript has the following data types:\n    - **Primitive Types**: \n      - Number\n      - String\n      - Boolean\n      - Null\n      - Undefined\n      - Symbol\n      - BigInt\n    - **Non-Primitive Types**: \n      - Object (includes Arrays, Functions, and more complex structures).",
        example: "// Example\nconst num = 42; // Number\nconst str = 'Hello'; // String\nconst isTrue = true; // Boolean\nconst emptyValue = null; // Null\nlet notAssigned; // Undefined\nconst unique = Symbol('id'); // Symbol\nconst bigIntNum = 123n; // BigInt\n\nconst obj = { key: 'value' }; // Object\nconst arr = [1, 2, 3]; // Array (a type of Object)\nconst func = function() { return 'I am a function'; }; // Function (a type of Object)"
      },
      {
        question: "What do the spread and rest operators do?",
        answer: "\n    - **Spread Operator (...):** Expands elements of an array or object. Useful for copying or merging.\n    - **Rest Operator (...):** Collects all remaining elements into an array. Used in functions or destructuring.",
        example: "// Spread Operator\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]\n\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }\n\n// Rest Operator\nfunction sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3)); // 6\n\nconst [first, ...rest] = [10, 20, 30];\nconsole.log(first); // 10\nconsole.log(rest); // [20, 30]"
      },
      {
        question: "What are the ES6 features used in JavaScript?",
        answer: "Common ES6 features include:\n    - let and const for variable declaration\n    - Arrow functions (\"=>\")\n    - Template literals (\"\`\")\n    - Default parameters\n    - Destructuring (array/object)\n    - Modules (import/export)\n    - Promises\n    - Classes\n    - Enhanced object literals\n    - Spread/rest operators\n    - for...of loops\n    - Symbols\n    - Map, Set, WeakMap, WeakSet",
        example: "// Example\nconst add = (a, b = 0) => a + b; // Default parameter and arrow function\nconst name = 'John';\nconsole.log(`Hello, ${name}`); // Template literal\n\nconst obj = { x: 10, y: 20 };\nconst { x, y } = obj; // Destructuring\n\nconst arr = [1, 2, 3];\nconst arrCopy = [...arr]; // Spread operator\n\nimport { something } from './module.js'; // Module usage"
      },
      {
        question: "Which array methods are ES6 features?",
        answer: "ES6 introduced some new array methods:\n    - **find()**: Finds the first element that satisfies a condition.\n    - **findIndex()**: Finds the index of the first element that satisfies a condition.\n    - **includes()**: Checks if an array includes a certain value.\n    - **from()**: Creates an array from an iterable or array-like object.\n    - **keys(), values(), entries()**: Iterators for accessing array elements or keys.",
        example: "// Example\nconst arr = [1, 2, 3, 4];\nconsole.log(arr.find(num => num > 2)); // 3\nconsole.log(arr.findIndex(num => num > 2)); // 2\nconsole.log(arr.includes(3)); // true\n\nconsole.log(Array.from('123')); // ['1', '2', '3']\n\nfor (const key of arr.keys()) {\n  console.log(key); // 0, 1, 2, 3\n}\nfor (const value of arr.values()) {\n  console.log(value); // 1, 2, 3, 4\n}"  
      },
      {
        question: "What is and why might you destructure an object or array?",
        answer: "Destructuring is a syntax for extracting values from arrays or properties from objects into variables.\n    - Simplifies code and improves readability.\n    - Useful for function parameters or working with APIs.",
        example: "// Example\nconst arr = [10, 20, 30];\nconst [a, b, c] = arr;\nconsole.log(a, b, c); // 10, 20, 30\n\nconst obj = { name: 'John', age: 25 };\nconst { name, age } = obj;\nconsole.log(name, age); // John, 25\n\n// Function with destructuring\nfunction greet({ name }) {\n  console.log(`Hello, ${name}`);\n}\ngreet(obj); // Hello, John"
      },
      {
        question: "What is Git? Why do you use it? What are some common commands you use?",
        answer: "Git is a version control system used to track changes in source code during software development. It allows multiple developers to work on a project simultaneously and provides tools for collaboration, branching, and history tracking.",
        example: "// Common Git Commands\n- git init: Initialize a new Git repository\n- git clone <repo_url>: Clone an existing repository\n- git add .: Stage changes for commit\n- git commit -m 'message': Commit staged changes\n- git push: Push changes to remote repository\n- git pull: Fetch and merge changes from remote\n- git branch: Manage branches\n- git merge <branch>: Merge branches"
      },
      {
        question: "What is Agile? What is Scrum?",
        answer: "Agile is a software development methodology focused on iterative progress, collaboration, and flexibility to changes. Scrum is a framework under Agile, using time-boxed sprints and roles like Scrum Master and Product Owner.",
        example: "// Scrum Features\n- Sprint planning: Plan work for a 2-4 week sprint\n- Daily stand-ups: Short daily meetings\n- Sprint review: Show progress to stakeholders\n- Retrospective: Reflect on the sprint to improve"
      },
      {
        question: "What are some CSS selectors and how do they differ?",
        answer: "CSS selectors are patterns used to select elements for styling.\n- **Universal selector (*):** Selects all elements\n- **Type selector:** Selects elements by tag (e.g., div, p)\n- **Class selector (.className):** Selects elements with a specific class\n- **ID selector (#id):** Selects elements with a specific ID\n- **Attribute selector:** Selects elements with specific attributes\n- **Pseudo-classes:** Selects based on state (e.g., :hover, :nth-child)",
        example: "// Example\n/* Universal selector */\n* { margin: 0; }\n/* Type selector */\np { font-size: 16px; }\n/* Class selector */\n.button { color: blue; }\n/* ID selector */\n#header { background: black; }\n/* Pseudo-class */\na:hover { text-decoration: underline; }"
      },
      {
        question: "What is specificity in CSS?",
        answer: "Specificity determines which CSS rule takes precedence when multiple rules apply to an element. It is calculated based on:\n- Inline styles: Highest specificity (e.g., style=\"color: red;\")\n- ID selectors: Higher than class selectors\n- Class selectors: Higher than type selectors\n- Type selectors: Lowest specificity",
        example: "// Example\n#header { color: blue; } // ID selector (higher specificity)\n.header { color: red; } // Class selector (lower specificity)\n\n<div id=\"header\" class=\"header\">Hello</div>\n/* The text will be blue due to higher specificity of the ID selector */"
      },
      {
        question: "What is responsive design and how might you implement it?",
        answer: "Responsive design ensures a website works on devices of all sizes. Techniques include:\n- Fluid layouts (using percentages for width)\n- Media queries\n- Flexible images (max-width: 100%)\n- CSS Grid or Flexbox for layouts",
        example: "// Example with Media Query\nbody {\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  body {\n    font-size: 14px;\n  }\n}"
      },
      {
        question: "What are some issues with numbers in JavaScript you may have to protect against?",
        answer: "Issues with numbers in JavaScript include:\n- Floating-point precision errors\n- NaN (result of invalid math operations)\n- Handling very large or small numbers (use BigInt for integers)\n- Implicit type coercion in comparisons",
        example: "// Example of Floating-point Issue\nconsole.log(0.1 + 0.2); // 0.30000000000000004\n\n// Use BigInt for large integers\nconst big = 123456789012345678901n;\nconsole.log(big);\n\n// NaN Example\nconsole.log('a' - 1); // NaN"
      },
      {
        question: "What are Promises and why might you use them?",
        answer: "Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation. They allow cleaner asynchronous code than callbacks.",
        example: "// Example\nconst fetchData = () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => resolve('Data fetched'), 1000);\n  });\n};\nfetchData().then(data => console.log(data)).catch(err => console.error(err));"
      },
      {
        question: "What is pass by reference and how does it differ from pass by value?",
        answer: "In JavaScript:\n- **Pass by value:** Copies the value (for primitives).\n- **Pass by reference:** Copies a reference to the same memory location (for objects and arrays).",
        example: "// Example\nlet a = 5;\nlet b = a; // Pass by value\nb = 10;\nconsole.log(a); // 5\n\nconst obj1 = { x: 10 };\nconst obj2 = obj1; // Pass by reference\nobj2.x = 20;\nconsole.log(obj1.x); // 20"
      },
      {
        question: "How do you stay up to date?",
        answer: "Staying up to date involves:\n- Reading tech blogs (e.g., CSS-Tricks, Smashing Magazine)\n- Following official documentation (e.g., MDN, React docs)\n- Watching tutorials or taking courses (e.g., Udemy, Pluralsight)\n- Practicing on platforms like CodePen or GitHub\n- Engaging with developer communities (e.g., Stack Overflow, Reddit)",
        example: "// Example: Stay updated\nconst resources = ['MDN', 'CSS-Tricks', 'React Docs'];\nresources.forEach(resource => console.log(`Explore: ${resource}`));"
      },
      {
        question: "Why should we hire you?",
        answer: "You should hire me because:\n- I have 3+ years of frontend development experience with strong skills in HTML, CSS, JavaScript, and React.\n- I have a proven track record of delivering high-quality, responsive, and user-friendly applications.\n- I stay updated with the latest technologies and best practices.\n- I am a team player with excellent communication skills.",
        example: "// Example Response\nconsole.log('I can provide solutions that align with your company's goals and ensure a positive user experience.');"
      },
      {
        question: "Why do you want to work for us?",
        answer: "I want to work for your company because:\n- Your company’s mission and values align with my personal and professional goals.\n- I admire the innovative projects your team is working on.\n- I see opportunities for growth and learning here.\n- I want to contribute to creating impactful products for users.",
        example: "// Example Response\nconsole.log('I’m excited to bring my skills to a company that values innovation and collaboration.');"
      },
      {
        question: "What is your biggest professional achievement?",
        answer: "One of my biggest professional achievements is successfully leading the development of a responsive e-commerce web application, which improved the client’s conversion rate by 25%.",
        example: "// Example Response\nconsole.log('Leading the frontend development for a project that delivered measurable results and earned client accolades is a highlight of my career.');"
      },
      {
        question: "What is the Virtual DOM in React? What is the difference between Virtual DOM and 'real' DOM?",
        answer: "The Virtual DOM is an in-memory representation of the real DOM, enabling React to update the UI efficiently by minimizing direct DOM manipulations.\n- **Virtual DOM**: Lightweight and used for efficient updates.\n- **Real DOM**: Browser-rendered; slower for frequent updates.",
        example: "// Example\nconst element = <h1>Hello, world!</h1>;\nReact updates the virtual DOM first, then applies the minimal changes to the real DOM."
      },
      {
        question: "What is JSX?",
        answer: "JSX (JavaScript XML) is a syntax extension for JavaScript, used with React to describe the UI structure in a syntax similar to HTML.",
        example: "// Example\nconst element = <h1>Hello, world!</h1>;\nReactDOM.render(element, document.getElementById('root'));"
      },
      {
        question: "What is the difference between an element and a component?",
        answer: "- **Element**: A plain object representing a DOM node. Immutable.\n- **Component**: A reusable and composable piece of UI, defined as a class or function.",
        example: "// Example\nconst element = <h1>Hello</h1>; // Element\nfunction Greeting() { return <h1>Hello</h1>; } // Component"
      },
      {
        question: "Can you write React without JSX?",
        answer: "Yes, React can be written without JSX by using React.createElement() to create elements manually.",
        example: "// Example Without JSX\nconst element = React.createElement('h1', null, 'Hello, world!');\nReactDOM.render(element, document.getElementById('root'));"
      },
      {
        question: "How do you pass a value from parent to child? What about from child to parent?",
        answer: "- **Parent to Child**: Pass values as props.\n- **Child to Parent**: Pass a callback function as a prop, then call it with data from the child.",
        example: "// Parent to Child\nfunction Parent() {\n  return <Child name='John' />;\n}\nfunction Child({ name }) {\n  return <p>{name}</p>; // Output: John\n}\n\n// Child to Parent\nfunction Parent() {\n  const handleData = (data) => console.log(data);\n  return <Child sendData={handleData} />;\n}\nfunction Child({ sendData }) {\n  return <button onClick={() => sendData('Hello')}>Send</button>;\n}"
      },
      {
        question: "What is prop-drilling?",
        answer: "Prop-drilling is the process of passing props through multiple layers of components, even when only a deeply nested component needs the data.",
        example: "// Example\nfunction Grandparent() {\n  const data = 'Hello';\n  return <Parent data={data} />;\n}\nfunction Parent({ data }) {\n  return <Child data={data} />;\n}\nfunction Child({ data }) {\n  return <p>{data}</p>; // Output: Hello\n}"
      },
      {
        question: "Can you modify props?",
        answer: "No, props are immutable. They cannot be modified within the component that receives them. To change data, use state or callbacks.",
        example: "// Example\nfunction Component({ propValue }) {\n  // propValue = 'new value'; // Error\n  return <p>{propValue}</p>;\n}"
      },
      {
        question: "What is the difference between props and state?",
        answer: "- **Props**: Passed from parent to child. Immutable within the child.\n- **State**: Local to a component. Mutable and managed internally.",
        example: "// Example\nfunction Component() {\n  const [count, setCount] = React.useState(0); // State\n  return <Child count={count} />; // Props\n}\nfunction Child({ count }) {\n  return <p>{count}</p>; // Output: 0\n}"
      },
      {
        question: "What is the component lifecycle?",
        answer: "The component lifecycle consists of phases in a React class component:\n    - **Mounting**: Component is created and inserted into the DOM.\n        - Methods: constructor(), render(), componentDidMount()\n    - **Updating**: Component is re-rendered due to changes in props or state.\n        - Methods: shouldComponentUpdate(), render(), componentDidUpdate()\n    - **Unmounting**: Component is removed from the DOM.\n        - Method: componentWillUnmount()",
        example: "// Example of lifecycle method\nclass MyComponent extends React.Component {\n  componentDidMount() {\n    console.log('Component mounted!');\n  }\n  render() {\n    return <h1>Hello</h1>;\n  }\n}"
      },
      {
        question: "How do you update the lifecycle in function components?",
        answer: "Function components use React hooks (like useEffect) to handle lifecycle events:\n    - useEffect replaces componentDidMount, componentDidUpdate, and componentWillUnmount.\n    - You define effects that run after render or during cleanup.",
        example: "// Example\nfunction MyComponent() {\n  React.useEffect(() => {\n    console.log('Component mounted or updated!');\n    return () => {\n      console.log('Component will unmount!');\n    };\n  }, []); // Empty array means this runs only on mount and unmount\n  return <h1>Hello</h1>;\n}"
      },
      {
        question: "What parameters does useEffect take in?",
        answer: "useEffect takes two parameters:\n    1. A callback function (the effect function).\n    2. An optional dependency array to control when the effect runs.",
        example: "// Example\nReact.useEffect(() => {\n  console.log('Effect triggered');\n}, [dependency]); // Runs only if 'dependency' changes\n\nReact.useEffect(() => {\n  console.log('Runs once');\n}, []); // Runs once on mount"
      },
      {
        question: "When does the useEffect function run?",
        answer: "The useEffect function runs:\n    - After the component renders (by default).\n    - When dependencies in the dependency array change.\n    - Cleanup functions run before the next effect or unmount.",
        example: "// Example\nReact.useEffect(() => {\n  console.log('Component rendered or dependency changed');\n}, [dependency]);"
      },
      {
        question: "What is the useEffect function's return value?",
        answer: "The return value of the useEffect function is a cleanup function that runs before the component unmounts or before the next effect.",
        example: "// Example\nReact.useEffect(() => {\n  const timer = setInterval(() => console.log('Tick'), 1000);\n  return () => clearInterval(timer); // Cleanup the timer on unmount\n}, []);"
      },
      {
        question: "What is the difference between refs and state changes?",
        answer: "- **Refs**: Directly access or modify DOM elements without triggering a re-render.\n- **State**: Managed data that triggers re-rendering when updated.",
        example: "// Example\nfunction Component() {\n  const inputRef = React.useRef(null); // Ref\n  const [value, setValue] = React.useState(''); // State\n\n  function handleFocus() {\n    inputRef.current.focus(); // Access DOM element directly\n  }\n\n  return (\n    <div>\n      <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />\n      <button onClick={handleFocus}>Focus Input</button>\n    </div>\n  );\n}"
      },
      {
        question: "When is the best time to use refs?",
        answer: "Refs are best used for:\n    - Accessing or manipulating DOM elements directly.\n    - Storing mutable values that don’t trigger re-renders (e.g., timers, counters).\n    - Managing third-party libraries.",
        example: "// Example\nfunction App() {\n  const inputRef = React.useRef(null);\n  const focusInput = () => inputRef.current.focus();\n\n  return (\n    <div>\n      <input ref={inputRef} />\n      <button onClick={focusInput}>Focus</button>\n    </div>\n  );\n}"
      },
      {
        question: "What is a proper way to update a ref in a function component?",
        answer: "Refs are updated by directly mutating the ref’s current property without triggering re-renders.",
        example: "// Example\nfunction Counter() {\n  const countRef = React.useRef(0);\n\n  const increment = () => {\n    countRef.current += 1;\n    console.log('Ref value:', countRef.current);\n  };\n\n  return <button onClick={increment}>Increment</button>;\n}"
      },
      {
        question: "What is the difference between the Context API and prop drilling?",
        answer: "- **Prop Drilling**: Passing props through multiple components to reach a deeply nested child.\n- **Context API**: Provides a way to share values across components without prop drilling.",
        example: "// Prop Drilling\nfunction Grandparent() {\n  const data = 'Hello';\n  return <Parent data={data} />;\n}\nfunction Parent({ data }) {\n  return <Child data={data} />;\n}\nfunction Child({ data }) {\n  return <p>{data}</p>; // Output: Hello\n}\n\n// Context API\nconst DataContext = React.createContext();\nfunction Grandparent() {\n  return (\n    <DataContext.Provider value={'Hello'}>\n      <Child />\n    </DataContext.Provider>\n  );\n}\nfunction Child() {\n  const data = React.useContext(DataContext);\n  return <p>{data}</p>; // Output: Hello\n}"
      },
      {
        question: "When shouldn’t you use the Context API?",
        answer: "Avoid using the Context API for:\n    - Frequently updated values (can cause unnecessary re-renders).\n    - Local state that doesn’t need to be shared widely.\n\nConsider alternatives like Redux or prop drilling for these scenarios.",
        example: "// Example of inappropriate Context API usage\nconst CounterContext = React.createContext();\nfunction Parent() {\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <CounterContext.Provider value={count}>\n      <Child />\n    </CounterContext.Provider>\n  );\n}\nfunction Child() {\n  const count = React.useContext(CounterContext);\n  return <p>{count}</p>; // Can cause unnecessary renders\n}"
      },
      {
        question: "What is a Fragment?",
        answer: "A React Fragment is a lightweight wrapper that allows grouping multiple elements without adding extra nodes to the DOM.",
        example: "// Example\nfunction Component() {\n  return (\n    <React.Fragment>\n      <h1>Title</h1>\n      <p>Paragraph</p>\n    </React.Fragment>\n  );\n}\n\n// Short syntax for Fragment\nfunction Component() {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Paragraph</p>\n    </>\n  );\n}"
      },
      {
        question: "When should you use a Class-based component vs a Function-based component?",
        answer: "- **Class-based Components**:\n    - When using older React versions.\n    - For accessing lifecycle methods (prior to hooks).\n- **Function-based Components**:\n    - With modern React (16.8+).\n    - Simpler and more concise.\n    - Use hooks to manage state and lifecycle.",
        example: "// Class-based Component\nclass MyComponent extends React.Component {\n  render() {\n    return <h1>Hello</h1>;\n  }\n}\n\n// Function-based Component\nfunction MyComponent() {\n  return <h1>Hello</h1>;\n}"
      },
      {
        question: "What is a Higher-Order Component?",
        answer: "A Higher-Order Component (HOC) is a function that takes a component and returns a new component with added functionality.",
        example: "// Example\nfunction withLogger(WrappedComponent) {\n  return function(props) {\n    console.log('Rendering component');\n    return <WrappedComponent {...props} />;\n  };\n}\n\nconst EnhancedComponent = withLogger(MyComponent);\n<EnhancedComponent />; // Logs 'Rendering component'"
      },
      {
        question: "What is a portal?",
        answer: "A React Portal allows rendering children into a different part of the DOM tree, outside of the parent component's hierarchy.",
        example: "// Example\nReactDOM.createPortal(\n  <div>Portal Content</div>,\n  document.getElementById('portal-root')\n);\n\n// portal-root is an HTML element defined outside the app root:\n// <div id='portal-root'></div>"
      },
      {
        question: "What are uncontrolled components? What are controlled components?",
        answer: "- **Uncontrolled Components**: Manage their own state internally (e.g., DOM handles input values).\n- **Controlled Components**: React state is the single source of truth, and input values are controlled via props.",
        example: "// Example of Controlled Component\nfunction ControlledInput() {\n  const [value, setValue] = React.useState('');\n\n  return (\n    <input value={value} onChange={(e) => setValue(e.target.value)} />\n  );\n}\n\n// Example of Uncontrolled Component\nfunction UncontrolledInput() {\n  const inputRef = React.useRef();\n\n  const handleSubmit = () => {\n    alert(inputRef.current.value);\n  };\n\n  return (\n    <>\n      <input ref={inputRef} />\n      <button onClick={handleSubmit}>Submit</button>\n    </>\n  );\n}"
      }
]

export default data;
  
  