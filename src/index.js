import React from "react";
import App from './components/App.js';

// import reactDOM from "react-dom"; Version 17~
import { createRoot } from "react-dom/client"; // version 18^
const root = createRoot(document.getElementById("root")); // version 18^

import "./index.css";



// reactDOM.render(<App />, document.getElementById("root")); Version 17~
root.render(<App />); // Version 18^