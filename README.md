# React

React is a popular JavaScript library for building fast and interactive user interfaces. It was developed by Facebook and is widely used to create modern web applications. React works on the concept of reusable components, making development easier and more organized.

-----------------------------------------------------------

# What exactly react is ?

1:javaScript library to build Dynamic and interactive user interface.
2: Developed at facebook in 2011
3: currently most widely used in js library for front-end development.
4: used to create single page application (SPA)

# Components of React 

:React components are like small building blocks of a web page.
:Each component is a piece of the UI that does one specific job. For example, a button, a navbar, or a card can each be a separate component. You build these small parts and then combine them to make a full website or app.

>In short, components = reusable pieces of UI.

# DOM (Document Object Model)

:DOM is a structured representation of your webpage.
:is a way for the browser to understand and work with a web page.

>When a web page loads, the browser takes the HTML and turns it into a tree-like structure where every element (like <div>, <h1>, <p>) becomes a node in that tree.
JavaScript can then use this structure to read, change, add, or remove elements on the page without reloading it.

# Working of React
1:Break the UI into components: React lets you build your app using small, reusable pieces called components. Each part of the page (like a button or header) is a component. <3

2: Update only what’s changed:
React then updates only the specific parts of the real DOM that actually changed. This makes it fast and efficient.

3: Re-render the UI:
The browser displays the updated UI without reloading the page.
eg: if you like a post the heart color turns red from white rest the things are same as it is (thats called re-rendring)

4: its decreative ( you do not need to define the steps, just define the final uI design) <3

# importance of Virtual DOM 
: The Virtual DOM (VDOM) is like a lightweight copy of the real DOM stored in memory.
: React uses this concept to make updates fast and efficient:

>React uses this concept to make updates fast and efficient:

1: React keeps a virtual copy of the page (Virtual DOM). (in the memory.)
2:When something changes (like a user typing or clicking), React updates the Virtual DOM first.
3:Then, React compares the new Virtual DOM with the previous version to see what actually changed.
4:Finally, it updates only those parts in the real DOM that need to change.

# What is Vite in React 
:In a React project created with Vite, there’s a file called vite.config.js — it controls how your app is built and runs.
: It tells Vite how to run, build, and optimize your React app.

# eslint.config.js
:ESLint acts like a code checker or grammar teacher for your code.
It helps you write clean, consistent, and error-free JavaScript (and React) code.
:It helps you catch small mistakes early (like missing imports or unused variables) before they break your app.