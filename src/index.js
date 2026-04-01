import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1 className="header">Fast Pizza Company Ltd</h1>;
}
function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
  return (
    <footer>
      We are open 24hrs! make your order now! Call us at 0707297649
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/BBQ-chicken.jpg" alt="BBQ Chicken Pizza" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
