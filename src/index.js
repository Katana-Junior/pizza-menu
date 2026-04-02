import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const pizzaData = [
    {
      id: 1,
      name: "BBQ Chicken Pizza",
      ingredients: "Chicken, BBQ Sauce, Onions, Cheese",
      price: 12.99,
      photoName: "pizzas/BBQ-chicken.jpg",
      soldOut: false,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      ingredients: "Tomato Sauce, Mozzarella, Basil",
      price: 10.99,
      photoName: "pizzas/Italian maguerita.jpg",
      soldOut: false,
    },
    {
      id: 3,
      name: "Pepperoni Pizza",
      ingredients: "Tomato Sauce, Mozzarella, Pepperoni",
      price: 11.99,
      photoName: "pizzas/pepperoni.jpg",
      soldOut: true,
    },
    {
      id: 4,
      name: "Hawaiian Pizza",
      ingredients: "Tomato Sauce, Mozzarella, Ham, Pineapple",
      price: 13.99,
      photoName: "pizzas/hawaiian.jpg",
      soldOut: false,
    },
    {
      id: 5,
      name: "Veggie Pizza",
      ingredients: "Tomato Sauce, Mozzarella, Bell Peppers, Olives, Onions",
      price: 11.99,
      photoName: "pizzas/veggie-supreme.jpg",
      soldOut: false,
    },
    {
      id: 6,
      name: "Pesto and Tomato pizza",
      ingredients: "Tomato sauce, Olives, Onions",
      price: 9.5,
      photoName: "pizzas/pesto-tomato.jpg",
      soldOut: false,
    },
  ];
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
      <hr></hr>
      <h2>OUR MENU</h2>
      <hr></hr>
      <Pizza
        name="BBQ Chicken Pizza"
        ingredients="Chicken, BBQ Sauce, Onions, Cheese"
        price={12.99}
        photoName="pizzas/BBQ-chicken.jpg"
      />
      <Pizza
        name="Margherita Pizza"
        ingredients="Tomato Sauce, Mozzarella, Basil"
        price={10.99}
        photoName="pizzas/Italian maguerita.jpg"
      />
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

function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>${props.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
