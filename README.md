# My TypeScript Learning 🚀

Welcome to my **TypeScript Learning Journey**!  
This repository documents my exploration of TypeScript through notes, code examples, and small browser-based projects.  
I'm building a solid foundation of TypeScript—from basic types to working with the DOM and eventually integrating with React.

---

## 📁 Project Structure

my-typescript-learning/
│
├── dist/ # Compiled JavaScript files (output from TypeScript)
│ ├── index.js
│ └── practice.js
│
├── node_modules/ # npm dependencies
│
├── public/ # Reserved for static assets (currently empty)
│
├── src/ # TypeScript source files
│ ├── index.ts # Pizza order project
│ ├── practice.ts # Practice file with TS basics
│ └── test.js # JS file for quick comparisons or tests
│
├── .gitignore
├── index.html # Entry point loaded by lite-server
├── package-lock.json
├── package.json # Project configuration and scripts
├── tsconfig.json # TypeScript compiler configuration
└── README.md # You're here!

yaml
Copy
Edit

---

📚 Learning Goals
✅ Type annotations (string, number, boolean, etc.)
✅ Custom types and interfaces
✅ Arrays, objects, functions in TS
✅ DOM manipulation using TypeScript
🔜 TypeScript + React basics
🔜 Async patterns in TypeScript (Promises, async/await)

🧪 Example Project: Pizza Order System
A small TypeScript app that simulates:

Adding pizzas to a menu

Placing and completing orders

Managing cash in the register

Dynamically rendering everything on the web page using the DOM

💡 Tools Used
TypeScript

Lite Server (lite-server)

Node.js + npm

📜 License
MIT

🤝 Contributions
This is a personal learning project.
Feel free to fork it or use code snippets for your own learning!

## 🔧 Setup Instructions

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/Khan4218/my-typescript-learning.git
cd my-typescript-learning
npm install

2. Start the development server
bash
Copy
Edit
npm start
This will:

Compile your TypeScript files using tsc

Launch a development server using lite-server

Open index.html in your browser automatically