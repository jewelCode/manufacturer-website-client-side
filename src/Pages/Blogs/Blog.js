import React from 'react';

const Blog = () => {
    return (
        <div class="mx-6">
            <h1 class="text-4xl">How will you improve the performance of a React Application?</h1>
            <p class="text-2xl">Ans: We can Improve the performance of a React Application serveral Ways-</p>
            <ul class="text-2xl">
                <li>Keeping component state local where necessary</li>
                <li>Memoizing React components to prevent unnecessary re-renders</li>
                <li>Code-splitting in React using dynamic import</li>
                <li>Windowing or list virtualization in React</li>
                <li>Lazy loading images in React</li>
            </ul>
            <h1 class="text-4xl"> What are the different ways to manage a state in a React application?</h1>
            <p class="text-2xl">Ans: There are four main steps to manage state in a React Application</p>
            <ul class="text-2xl">
                <li>Local State</li>
                <li>Global State</li>
                <li>Serer State</li>
                <li>URL state</li>
            </ul>
            <h1 class="text-4xl"> How does prototypical inheritance work?</h1>
            <p class="text-2xl">Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf</p>

            <h1 class="text-4xl"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
            <p class="text-2xl">Ans:-</p>
            <h1 class="text-4xl">What is Unit Test?</h1>
            <h1 class="text-4xl">Why should write unit tests?</h1>
            <p class="text-2xl">Ans: Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>

        </div>
    );
};

export default Blog;