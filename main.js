const category = ['html', 'css', 'js', 'react'];
// static data works like a database for questions
const htmlQuestions = [
    {
        question: 'What is the correct HTML element for the largest heading?',
        allAnswers: ['<h1>', '<head>', '<heading>', '<h6>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which HTML element is used to create a hyperlink?',
        allAnswers: ['<link>', '<a>', '<href>', '<hyperlink>'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which HTML tag is used to create an unordered list?',
        allAnswers: ['<ul>', '<ol>', '<li>', '<list>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What is the correct way to add a background color in HTML?',
        allAnswers: ['<background>blue</background>', '<body color="blue">', '<body style="background-color: blue;">', '<bg>blue</bg>'],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which attribute is used to specify the source file for an image?',
        allAnswers: ['alt', 'src', 'href', 'link'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which tag is used to create a paragraph in HTML?',
        allAnswers: ['<p>', '<para>', '<pg>', '<div>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'How can you make a numbered list in HTML?',
        allAnswers: ['<list>', '<ul>', '<ol>', '<li>'],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        allAnswers: ['style', 'font', 'class', 'styles'],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you create a table in HTML?',
        allAnswers: ['<table>', '<tab>', '<tbl>', '<grid>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What does the <br> tag represent?',
        allAnswers: ['Bold text', 'Line break', 'Page break', 'Border'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        allAnswers: ['<css>', '<style>', '<script>', '<link>'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which tag is used to create a checkbox input?',
        allAnswers: ['<check>', '<checkbox>', '<input type="checkbox">', '<input checkbox>'],
        correctAnswerNumber: 3,
    },
    {
        question: 'How can you specify a comment in HTML?',
        allAnswers: ['// This is a comment', '<!-- This is a comment -->', '** This is a comment **', '/* This is a comment */'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which HTML element is used for adding metadata?',
        allAnswers: ['<meta>', '<link>', '<head>', '<body>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you create a text input field?',
        allAnswers: ['<input type="text">', '<textinput>', '<textfield>', '<input text>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which tag is used to define a division or section in an HTML document?',
        allAnswers: ['<span>', '<section>', '<div>', '<article>'],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which attribute is used to specify the character encoding for the HTML document?',
        allAnswers: ['name', 'charset', 'type', 'content'],
        correctAnswerNumber: 2,
    },
    {
        question: 'How do you make text bold in HTML?',
        allAnswers: ['<strong>', '<b>', '<bold>', '<text-bold>'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which element is used to specify a footer in a document?',
        allAnswers: ['<footer>', '<foot>', '<bottom>', '<footnote>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What is the purpose of the <head> tag?',
        allAnswers: ['To define the main content', 'To store metadata and links to resources', 'To define a header', 'To display headings'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which attribute is used to open a link in a new tab?',
        allAnswers: ['src', 'newtab', 'target="_blank"', 'window="_blank"'],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which tag is used to create a dropdown list?',
        allAnswers: ['<select>', '<option>', '<dropdown>', '<list>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you create an ordered list?',
        allAnswers: ['<ol>', '<list>', '<order>', '<ol-list>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which element is used to group radio buttons in a form?',
        allAnswers: ['<group>', '<radio-group>', '<fieldset>', '<section>'],
        correctAnswerNumber: 3,
    },
    {
        question: 'How do you add an external CSS file to an HTML document?',
        allAnswers: ['<css link="style.css">', '<link rel="stylesheet" href="style.css">', '<style src="style.css">', '<link src="style.css">'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which HTML tag is used to embed a video?',
        allAnswers: ['<media>', '<movie>', '<video>', '<embed>'],
        correctAnswerNumber: 3,
    },
    {
        question: 'How do you create a drop-down option in a select menu?',
        allAnswers: ['<option>', '<select>', '<choice>', '<menu-item>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What is the default display property of a <div> element?',
        allAnswers: ['inline', 'block', 'flex', 'inline-block'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which tag is used to create a table row?',
        allAnswers: ['<row>', '<tr>', '<td>', '<table-row>'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which tag is used to define an image map?',
        allAnswers: ['<imgmap>', '<imagemap>', '<map>', '<image-map>'],
        correctAnswerNumber: 3,
    },
];
const cssQuestions = [
    {
        question: 'Which CSS property is used to change the text color?',
        allAnswers: ['font-color', 'color', 'text-color', 'text-style'],
        correctAnswerNumber: 2,
    },
    {
        question: 'How do you add a background color for all `<h1>` elements?',
        allAnswers: [
            'h1 {color: blue;}', 
            'h1 {background-color: blue;}', 
            'h1 {bgcolor: blue;}', 
            'h1 {background: blue;}'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which CSS property controls the text size?',
        allAnswers: ['font-size', 'text-size', 'size', 'font-style'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What is the correct CSS syntax to change the font of an element?',
        allAnswers: [
            'font: Arial;',
            'font-family: Arial;',
            'text-font: Arial;',
            'font-type: Arial;'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which property is used to change the background color?',
        allAnswers: ['color', 'bg-color', 'background-color', 'background'],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which property is used to add space inside an element?',
        allAnswers: ['spacing', 'padding', 'margin', 'border-spacing'],
        correctAnswerNumber: 2,
    },
    {
        question: 'How do you center an element horizontally?',
        allAnswers: [
            'margin: 0 auto;',
            'text-align: center;', 
            'position: center;', 
            'align: center;'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which CSS property is used to change the font color of a link when hovered?',
        allAnswers: [
            'hover-color: red;', 
            'a:hover {color: red;}', 
            'link-hover: red;', 
            'hover-text-color: red;'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'How do you add a shadow to a box in CSS?',
        allAnswers: [
            'shadow: 5px 5px;', 
            'box-shadow: 5px 5px;', 
            'shadow-box: 5px 5px;', 
            'border-shadow: 5px 5px;'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which property is used to change the width of an element’s border?',
        allAnswers: ['border-weight', 'border-width', 'border-style', 'border-size'],
        correctAnswerNumber: 2,
    },
    {
        question: 'What is the default value of the `position` property?',
        allAnswers: ['relative', 'absolute', 'static', 'fixed'],
        correctAnswerNumber: 3,
    },
    {
        question: 'How do you make the text bold in CSS?',
        allAnswers: [
            'font: bold;', 
            'font-weight: bold;', 
            'text-style: bold;', 
            'font-style: bold;'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which CSS property is used to control the space between lines of text?',
        allAnswers: [
            'line-height', 
            'line-spacing', 
            'text-height', 
            'letter-spacing'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you create a flex container?',
        allAnswers: [
            'display: block;', 
            'display: flex;', 
            'display: grid;', 
            'display: inline-block;'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which property is used to make the text italic?',
        allAnswers: ['font-style', 'font-variant', 'font-weight', 'text-transform'],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you change the background image of an element?',
        allAnswers: [
            'background-img: url("image.jpg");', 
            'background-image: url("image.jpg");', 
            'bg-image: url("image.jpg");', 
            'image: url("image.jpg");'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which property controls the order of flex items?',
        allAnswers: ['order', 'flex-order', 'item-order', 'item-index'],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you change the cursor into a pointer when hovering over an element?',
        allAnswers: [
            'pointer: cursor;', 
            'cursor: pointer;', 
            'hover-pointer: cursor;', 
            'hover-cursor: pointer;'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which CSS property is used to change the list style of a list?',
        allAnswers: [
            'list-style-type', 
            'list-type', 
            'list-style', 
            'list-decor'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you hide an element in CSS?',
        allAnswers: [
            'display: none;', 
            'visibility: hidden;', 
            'hide: true;', 
            'display: hidden;'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which property is used to change the space outside of an element?',
        allAnswers: ['padding', 'margin', 'border', 'spacing'],
        correctAnswerNumber: 2,
    },
    {
        question: 'How do you set a background image to be repeated vertically?',
        allAnswers: [
            'background-repeat: vertical;', 
            'background-repeat: repeat-y;', 
            'background: repeat-y;', 
            'bg-repeat: vertical;'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which CSS property sets the amount of space between the content and the border?',
        allAnswers: ['border-spacing', 'margin', 'padding', 'spacing'],
        correctAnswerNumber: 3,
    },
    {
        question: 'How do you make an element take up the full width of its parent container?',
        allAnswers: [
            'width: 100%;', 
            'display: block;', 
            'width: auto;', 
            'max-width: 100%;'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which CSS property changes the color of text?',
        allAnswers: ['text-color', 'font-color', 'color', 'font-style'],
        correctAnswerNumber: 3,
    },
    {
        question: 'How do you apply a border to only the top of an element?',
        allAnswers: [
            'border-top', 
            'border: top', 
            'border: top-only', 
            'top-border'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which property is used to control the order of stacked elements?',
        allAnswers: ['z-order', 'z-index', 'stack-order', 'index'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which property is used to create rounded corners?',
        allAnswers: [
            'border-radius', 
            'corner-radius', 
            'border-round', 
            'radius'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you change the text color of all `<p>` elements?',
        allAnswers: [
            'p {text-color: blue;}', 
            'p {color: blue;}', 
            'p {font-color: blue;}', 
            'p {style: blue;}'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'How do you make a list item with no bullet points?',
        allAnswers: [
            'list-style: none;', 
            'bullet: none;', 
            'list: no-bullet;', 
            'list-type: none;'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you align text to the right in CSS?',
        allAnswers: [
            'text-align: right;', 
            'align: right;', 
            'justify-content: right;', 
            'align-text: right;'
        ],
        correctAnswerNumber: 1,
    },
];
const jsQuestions = [
    {
        question: 'Which keyword is used to declare a variable in JavaScript?',
        allAnswers: ['var', 'let', 'const', 'All of the above'],
        correctAnswerNumber: 4,
    },
    {
        question: 'How do you create a function in JavaScript?',
        allAnswers: ['function myFunction()', 'def myFunction()', 'create myFunction()', 'function = myFunction()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you call a function named `myFunction`?',
        allAnswers: ['call myFunction()', 'myFunction()', 'call function myFunction()', 'run myFunction()'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which symbol is used for comments in JavaScript?',
        allAnswers: ['//', '<!-- -->', '#', '/* */'],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you write an IF statement in JavaScript?',
        allAnswers: ['if i == 5 then', 'if (i == 5)', 'if i = 5', 'if i === 5'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which method is used to convert a string to lowercase?',
        allAnswers: ['toLowerCase()', 'lower()', 'lowerCase()', 'convertLower()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which of the following is a JavaScript data type?',
        allAnswers: ['String', 'Number', 'Boolean', 'All of the above'],
        correctAnswerNumber: 4,
    },
    {
        question: 'How do you declare a constant in JavaScript?',
        allAnswers: ['const myVariable', 'constant myVariable', 'let myVariable', 'define myVariable'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which method is used to add an element at the end of an array?',
        allAnswers: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which operator is used to compare both value and type?',
        allAnswers: ['=', '==', '===', '!='],
        correctAnswerNumber: 3,
    },
    {
        question: 'How do you find the length of a string in JavaScript?',
        allAnswers: ['string.length', 'string.size', 'string.len', 'string.count'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What will `console.log(typeof null)` return?',
        allAnswers: ['null', 'object', 'undefined', 'number'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which built-in method is used to parse a JSON string?',
        allAnswers: ['JSON.parse()', 'JSON.stringify()', 'parse.JSON()', 'parseString()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which method is used to remove the last element of an array?',
        allAnswers: ['pop()', 'push()', 'slice()', 'shift()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        allAnswers: ['=', '==', '===', '=>'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which method can be used to convert an array to a string?',
        allAnswers: ['toString()', 'toArray()', 'join()', 'split()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which keyword is used to handle exceptions in JavaScript?',
        allAnswers: ['catch', 'handle', 'try', 'throw'],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which function is used to parse an integer from a string?',
        allAnswers: ['parseInt()', 'parse()', 'parseInteger()', 'int()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'How can you add a single-line comment in JavaScript?',
        allAnswers: ['<!-- Comment -->', '/* Comment */', '// Comment', '## Comment'],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which method can be used to create a new array from elements that pass a test?',
        allAnswers: ['filter()', 'map()', 'reduce()', 'concat()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which statement is used to stop a loop in JavaScript?',
        allAnswers: ['end', 'break', 'stop', 'return'],
        correctAnswerNumber: 2,
    },
    {
        question: 'What will `Boolean("")` return?',
        allAnswers: ['true', 'false', 'null', 'undefined'],
        correctAnswerNumber: 2,
    },
    {
        question: 'What does `typeof NaN` return?',
        allAnswers: ['undefined', 'number', 'NaN', 'object'],
        correctAnswerNumber: 2,
    },
    {
        question: 'How do you create a new object in JavaScript?',
        allAnswers: ['new Object()', 'Object()', 'create Object()', 'make Object()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which function is used to remove whitespace from both sides of a string?',
        allAnswers: ['removeSpace()', 'trim()', 'cutSpace()', 'split()'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which event occurs when a user clicks on an HTML element?',
        allAnswers: ['onclick', 'onmouseover', 'onchange', 'onmouseclick'],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which keyword is used to create a class in JavaScript?',
        allAnswers: ['create', 'class', 'define', 'new'],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which method is used to add elements to the beginning of an array?',
        allAnswers: ['push()', 'shift()', 'unshift()', 'concat()'],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which function is used to delay code execution for a set time in JavaScript?',
        allAnswers: ['setTimeout()', 'setInterval()', 'delay()', 'wait()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What does the `this` keyword refer to in JavaScript?',
        allAnswers: ['The current function', 'The global object', 'The current object', 'The current scope'],
        correctAnswerNumber: 3,
    },
];
const reactQuestions = [
    {
        question: 'What is React primarily used for?',
        allAnswers: [
            'Building server-side applications', 
            'Building user interfaces', 
            'Creating databases', 
            'Writing backend logic'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which method is used to create a component in React?',
        allAnswers: [
            'React.component()', 
            'React.createComponent()', 
            'React.Component()', 
            'React.createElement()'
        ],
        correctAnswerNumber: 4,
    },
    {
        question: 'What is a state in React?',
        allAnswers: [
            'A way to store component data', 
            'A type of prop', 
            'A style property', 
            'An event handler'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'What is JSX?',
        allAnswers: [
            'A type of JavaScript function', 
            'A syntax extension for JavaScript', 
            'A CSS property', 
            'A new HTML standard'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'What is the purpose of `useState` in React?',
        allAnswers: [
            'For handling component lifecycle', 
            'For creating classes', 
            'For managing state in functional components', 
            'For fetching data'
        ],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which hook is used for side effects in React?',
        allAnswers: ['useEffect', 'useSideEffect', 'useState', 'useContext'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What is the purpose of the `key` prop?',
        allAnswers: [
            'To uniquely identify elements in an array', 
            'To set styles dynamically', 
            'To add event listeners', 
            'To pass data between components'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'What is the difference between props and state?',
        allAnswers: [
            'Props are immutable, while state is mutable', 
            'State is passed down, props are not', 
            'State is for styling, props are for data', 
            'There is no difference'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which lifecycle method is called when a component is first rendered?',
        allAnswers: [
            'componentDidUpdate()', 
            'componentWillUnmount()', 
            'componentDidMount()', 
            'componentWillReceiveProps()'
        ],
        correctAnswerNumber: 3,
    },
    {
        question: 'What is the `children` prop?',
        allAnswers: [
            'A way to pass styles', 
            'A prop for nested elements', 
            'A method to update state', 
            'A reserved keyword in React'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'What is the purpose of React Router?',
        allAnswers: [
            'For managing CSS styles', 
            'For handling routing in React applications', 
            'For fetching data', 
            'For optimizing React performance'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which hook is used to share data between components?',
        allAnswers: ['useState', 'useRef', 'useMemo', 'useContext'],
        correctAnswerNumber: 4,
    },
    {
        question: 'What does `ReactDOM.render()` do?',
        allAnswers: [
            'It compiles React code', 
            'It renders a React element into the DOM', 
            'It initializes a state object', 
            'It removes an element from the DOM'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'How do you pass data to a child component?',
        allAnswers: [
            'Using state', 
            'Using props', 
            'Using a ref', 
            'Using an event handler'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'What is a higher-order component (HOC)?',
        allAnswers: [
            'A component that manages state', 
            'A function that returns a component', 
            'A function that adds extra props', 
            'A method for optimizing performance'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'Which hook is used to create a reference to a DOM element?',
        allAnswers: ['useDOM()', 'useRef()', 'useContext()', 'useEffect()'],
        correctAnswerNumber: 2,
    },
    {
        question: 'What is `useReducer` used for?',
        allAnswers: [
            'For creating reducers', 
            'For writing CSS in JS', 
            'For complex state management', 
            'For managing global context'
        ],
        correctAnswerNumber: 3,
    },
    {
        question: 'How can you conditionally render a component?',
        allAnswers: [
            'Using if-else statements', 
            'Using the ternary operator', 
            'Using logical &&', 
            'All of the above'
        ],
        correctAnswerNumber: 4,
    },
    {
        question: 'What does the `useCallback` hook do?',
        allAnswers: [
            'Returns a memoized version of a callback function', 
            'Returns a state variable', 
            'Fetches data from an API', 
            'Handles side effects'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'What is the use of `memo` in React?',
        allAnswers: [
            'To prevent re-rendering of a component', 
            'To memoize values', 
            'To handle errors', 
            'To create classes'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you handle forms in React?',
        allAnswers: [
            'Using the `input` HTML element', 
            'Using form libraries like Formik', 
            'Using controlled components', 
            'All of the above'
        ],
        correctAnswerNumber: 4,
    },
    {
        question: 'Which hook should you use to manage performance optimizations?',
        allAnswers: ['useState', 'useEffect', 'useMemo', 'useReducer'],
        correctAnswerNumber: 3,
    },
    {
        question: 'Which method allows you to render lists in React?',
        allAnswers: ['map()', 'forEach()', 'filter()', 'reduce()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What does `React.Fragment` do?',
        allAnswers: [
            'Adds extra spacing', 
            'Groups a list of children without adding extra nodes', 
            'Acts as a state management tool', 
            'Handles component errors'
        ],
        correctAnswerNumber: 2,
    },
    {
        question: 'What is the use of `defaultProps` in React?',
        allAnswers: [
            'To define default values for props', 
            'To set initial state', 
            'To create event handlers', 
            'To render fallback UI'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which hook is used to track component mount and unmount?',
        allAnswers: ['useEffect()', 'useState()', 'useRef()', 'useContext()'],
        correctAnswerNumber: 1,
    },
    {
        question: 'What is the difference between `useEffect` and `useLayoutEffect`?',
        allAnswers: [
            'useEffect runs after render, useLayoutEffect runs before', 
            'useEffect manages state, useLayoutEffect manages DOM', 
            'useLayoutEffect is used for performance optimizations', 
            'There is no difference'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'Which lifecycle method is called when a component is removed?',
        allAnswers: [
            'componentWillUnmount()', 
            'componentDidMount()', 
            'componentDidUpdate()', 
            'componentWillReceiveProps()'
        ],
        correctAnswerNumber: 1,
    },
    {
        question: 'How do you optimize performance for re-rendering in React?',
        allAnswers: [
            'Using `memo`', 
            'Using `useMemo` and `useCallback`', 
            'Avoiding state mutations', 
            'All of the above'
        ],
        correctAnswerNumber: 4,
    },
    {
        question: 'What does the `useImperativeHandle` hook do?',
        allAnswers: [
            'Customizes the instance value exposed to parent components', 
            'Fetches data from an API', 
            'Handles complex state', 
            'Returns a memoized callback'
        ],
        correctAnswerNumber: 1,
    },
];
// get randomly 10 selected questions from a specific category containing 30 questions
function selectedQuestions(category) {
    let result = [];
    let tenRandoms = new Set();
    while (tenRandoms.size != 10) {
        const random = Math.floor(Math.random() * 30);
        tenRandoms.add(random);
    }
    let questions;
    if (category === 'html') {
        questions = htmlQuestions;
    }
    else if (category === 'css') {
        questions = cssQuestions;
    }
    else if (category === 'js') {
        questions = jsQuestions;
    }
    else if (category === 'react') {
        questions = reactQuestions;
    }
    for (let idx of tenRandoms) {
        result.push(questions[idx]);
    }
    return result;
}
// access html elements
const questionElement = document.getElementById('question');
const answerBtns = Array.from(document.getElementById('answer-btns').children);
const nextBtn = document.getElementById('next-btn');
// define the decision-making variables
let tenQuestions;
let selectedCategory; // ['html', 'css', 'js', 'react']
let currentQuestion = 0;
let score = 0;
// main app functions
function selectCategory() {
    answerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('category')) {
                // activate the selected button and deactivate all other buttons
                answerBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                // select category
                selectedCategory = category[btn.dataset.num-1];
                tenQuestions = selectedQuestions(selectedCategory);
                // show next btn
                nextBtn.style.display = 'block';
            }
        });
    });
}
function showQuestion() {
    // reset all buttons to default
    answerBtns.forEach(btn => btn.classList.remove('category', 'active'));
    // change question content
    questionElement.textContent = `${currentQuestion + 1}. ${tenQuestions[currentQuestion].question}`;
    // change answer buttons contents
    answerBtns.forEach((btn, idx) => {
        if (!btn.classList.contains('category')) {
            btn.textContent = tenQuestions[currentQuestion].allAnswers[idx];
            btn.addEventListener('click', () => {
                answerBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                tenQuestions[currentQuestion-1].selectedAnswer = parseInt(btn.dataset.num);
            });
        }
    });
}
function showFinalScore() {
    // compute the total score
    for (let i = 0; i < 10; i++) {
        if (tenQuestions[i].correctAnswerNumber === tenQuestions[i].selectedAnswer) score++;
    }
    // set a message according to score
    let message;
    if (score === 0) {
        message = "Try again! 😟";
    }
    else if (score >= 1 && score <= 2) {
        message = "Study more! 📚";
    }
    else if (score >= 3 && score <= 4) {
        message = "Almost there! 👍";
    }
    else if (score >= 5 && score <= 6) {
        message = "Good job! 🌟";
    }
    else if (score >= 7 && score <= 8) {
        message = "Well done! 👏";
    }
    else if (score >= 9 && score <= 10) {
        message = "Quiz master! 🏆";
    }
    // create final message
    document.querySelector('.quiz').innerHTML = `
        <p class="message">
            <span class="msg"> ${message} </span>
            Your Score Is: <span class="score">${score}</span> / 10
        </p>
        <div class="buttons">
            <button type="button" onclick="showAnswers()" class="show-answers">Show Answers</button>
            <button type="button" onclick="window.location.reload()" class="try-again">Try Again</button>
        </div>
    `;
}
function showAnswers() {
    document.querySelector('.quiz').innerHTML = `
        <h2 id="question">Question goes here..</h2>
        <div id="answer-btns">
            <button type="button" data-num="1">The First Answer</button>
            <button type="button" data-num="2">The Second Answer</button>
            <button type="button" data-num="3">The Third Answer</button>
            <button type="button" data-num="4">The Fourth Answer</button>
        </div>
        <button type="button" id="next-btn">Show Answers</button>
    `;
    const questionElement = document.getElementById('question');
    const answerBtns = Array.from(document.getElementById('answer-btns').children);
    const nextBtn = document.getElementById('next-btn');
    answerBtns.forEach(btn => btn.style.pointerEvents = 'none');
    let questionNumber = 0;
    function renderQuestion() {
        questionElement.textContent = `${questionNumber + 1}. ${tenQuestions[questionNumber].question}`;
        answerBtns.forEach((btn, idx) => {
            btn.textContent = tenQuestions[questionNumber].allAnswers[idx];
            btn.classList.remove('wrong-answer', 'correct-answer');
            btn.style.pointerEvents = 'none';
            if (btn.dataset.num == tenQuestions[questionNumber].selectedAnswer &&
                btn.dataset.num != tenQuestions[questionNumber].correctAnswerNumber
            ) {
                btn.classList.add('wrong-answer');
            }
            if (btn.dataset.num == tenQuestions[questionNumber].correctAnswerNumber) {
                btn.classList.add('correct-answer');
            }
        });
        nextBtn.innerHTML = 'Next';
        if (questionNumber === 9) {
            nextBtn.innerHTML = 'Try Again';
            nextBtn.onclick = () => window.location.reload();
        }
    }
    nextBtn.style.display = 'block';
    nextBtn.addEventListener('click', () => {
        renderQuestion();
        questionNumber++;
    });
}
function startQuiz() {
    selectCategory();
    currentQuestion = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    nextBtn.addEventListener('click', () => {
        if (currentQuestion < 10) {
            // show the next question and display next button
            answerBtns.forEach(btn => {
                if (btn.classList.contains('active')) {
                    showQuestion();
                    currentQuestion++;
                }
            });
        }
        else {
            showFinalScore();
        }
    })
}
startQuiz();
