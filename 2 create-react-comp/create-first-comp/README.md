# React Component Practice – create-first-comp

:This project is a simple React setup built with **Vite** to practice creating and understanding components.

### 1. Navigate to the project directory
```bash
cd "C:\Users\Hp\first-react-app\2 create-react-comp\create-first-comp"

# Here’s the updated App.jsx code (you can replace the default content with this):

function App() {
  return (
    <div>
      <h1>This is my first React Component!</h1>
      <p>React makes building user interfaces easier and more fun.</p>
      <Greeting />
    </div>
  );
}

function Greeting() {
  return (
    <h2>Welcome to React 🚀</h2>
  );
}

export default App;

# What I Learned

Setting up a React project using Vite
Creating functional components (App, Greeting)
Rendering components and JSX
Running a React app locally with npm run dev

# Dynamic components 

1: Dynamic component: jsx allows the creation of dynamic and interactive UI components.
2: JavaScript Expressions: using {}, we can embed within jsx. this includes variable, function calls amd more.

